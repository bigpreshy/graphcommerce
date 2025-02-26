import { useQuery } from '@graphcommerce/graphql'
import { CustomerAddressFragment } from '@graphcommerce/magento-customer/components/CreateCustomerAddressForm/CustomerAddress.gql'
import { CountryRegionsDocument, useFindCountry } from '@graphcommerce/magento-store'
import { ActionCard, IconSvg, iconHome } from '@graphcommerce/next-ui'
import { ActionCardItemRenderer } from '@graphcommerce/next-ui/ActionCard/ActionCardListForm'
import { Trans } from '@lingui/react'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'

type CustomerAddressActionCardProps = ActionCardItemRenderer<
  CustomerAddressFragment | null | undefined
>

export function CustomerAddressActionCard(props: CustomerAddressActionCardProps) {
  const {
    onReset,
    company,
    firstname,
    lastname,
    street,
    postcode,
    city,
    country_code,
    region,
    id,
    ...cardProps
  } = props
  const { push } = useRouter()
  const country = useFindCountry(country_code)

  if (cardProps.value === -1) {
    return (
      <ActionCard
        {...cardProps}
        image={<IconSvg src={iconHome} size='large' />}
        title={<Trans id='New address' />}
        details={<Trans id='Add new address' />}
        action={
          <Button disableRipple variant='text' color='secondary'>
            <Trans id='Select' />
          </Button>
        }
        reset={
          <Button disableRipple variant='text' color='secondary' onClick={onReset}>
            <Trans id='Change' />
          </Button>
        }
      />
    )
  }

  return (
    <ActionCard
      {...cardProps}
      image={<IconSvg src={iconHome} size='large' />}
      title={
        <>
          {street?.join(' ')}, {city}
        </>
      }
      details={
        <>
          {company} {firstname} {lastname} ({postcode}, {region?.region_code}{' '}
          {country?.full_name_locale})
        </>
      }
      action={
        <Button disableRipple variant='text' color='secondary'>
          <Trans id='Select' />
        </Button>
      }
      reset={
        <Button disableRipple variant='text' color='secondary' onClick={onReset}>
          <Trans id='Change' />
        </Button>
      }
      secondaryAction={
        <Button
          color='secondary'
          variant='text'
          onMouseDown={(e) => {
            e.stopPropagation()
          }}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            push(`/checkout/customer/addresses/edit?addressId=${id}`)
          }}
        >
          <Trans id='Edit address' />
        </Button>
      }
    />
  )
}
