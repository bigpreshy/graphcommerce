import { useQuery } from '@graphcommerce/graphql'
import { ExtendableComponent } from '@graphcommerce/next-ui'
import { useThemeProps } from '@mui/material'
import { useMemo } from 'react'
import { MoneyFragment } from './Money.gql'
import { StoreConfigDocument } from './StoreConfig.gql'

type OverridableProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  round?: boolean
  /** @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters */
  // eslint-disable-next-line react/no-unused-prop-types
  formatOptions?: Intl.NumberFormatOptions
}

export type MoneyProps = MoneyFragment & OverridableProps

const name = 'Money'

/** Expose the component to be exendable in your theme.components */
declare module '@mui/material/styles/components' {
  interface Components {
    Money?: Pick<ExtendableComponent<OverridableProps>, 'defaultProps'>
  }
}

export function Money(props: MoneyProps) {
  const { currency, value, round = false, formatOptions } = useThemeProps({ name, props })

  const { data: config } = useQuery(StoreConfigDocument)
  const locale = config?.storeConfig?.locale

  const digits = (value ?? 0) % 1 !== 0

  const numberFormatter = useMemo(() => {
    if (!locale) return undefined

    return new Intl.NumberFormat(locale.replace('_', '-'), {
      style: 'currency',
      currency: currency ?? config?.storeConfig?.base_currency_code ?? '',
      ...(round && !digits && { minimumFractionDigits: 0 }),
      ...(round && digits && { minimumFractionDigits: 2 }),
      ...(!round && { minimumFractionDigits: 2 }),
      ...formatOptions,
    })
  }, [config?.storeConfig?.base_currency_code, currency, digits, formatOptions, locale, round])

  if (!numberFormatter || !value) return null

  return <>{numberFormatter.format(value)}</>
}
