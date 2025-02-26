import { useFormGqlMutationCart } from '@graphcommerce/magento-cart'
import { PaymentOptionsProps } from '@graphcommerce/magento-cart-payment-method'
import { FormRow, InputCheckmark } from '@graphcommerce/next-ui'
import { useFormCompose, useFormPersist, useFormValidFields } from '@graphcommerce/react-hook-form'
import { Trans } from '@lingui/react'
import { TextField, Typography } from '@mui/material'
import { SetMolliePaymentMethodIssuerOnCartDocument } from './SetMolliePaymentMethodIssuerOnCart.gql'

type MollieIssuerOptionsProps = PaymentOptionsProps & { label: string; children?: React.ReactNode }

export function MollieIssuerOptions(props: MollieIssuerOptionsProps) {
  const { mollie_available_issuers = [], children } = props
  const { code, step, Container, label, title = '' } = props

  const form = useFormGqlMutationCart(SetMolliePaymentMethodIssuerOnCartDocument, {
    defaultValues: { code },
  })

  const { handleSubmit, muiRegister, formState, required } = form
  const submit = handleSubmit(() => {})
  const valid = useFormValidFields(form, required)

  // Since the issuer isn't retrievable from Magento we persist this value.
  useFormPersist({
    form,
    name: `PaymentMethodOptions_${code}`,
    persist: ['issuer'],
    storage: 'localStorage',
  })
  useFormCompose({ form, step, submit, key: `PaymentMethodOptions_${code}` })

  return (
    <Container>
      <Typography variant='h5' component='span'>
        <Trans id='Pay with {title}' values={{ title }} />
      </Typography>
      <form onSubmit={submit} noValidate>
        <FormRow>
          <TextField
            defaultValue=''
            variant='outlined'
            select
            SelectProps={{ native: true, displayEmpty: true }}
            error={formState.isSubmitted && !!formState.errors.issuer}
            helperText={formState.isSubmitted && formState.errors.issuer?.message}
            label={label}
            required={required.issuer}
            {...muiRegister('issuer', {
              required: { value: required.issuer, message: 'Please provide an issuer' },
            })}
            InputProps={{
              endAdornment: <InputCheckmark show={valid.issuer} select />,
            }}
          >
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <option value='' />
            {mollie_available_issuers?.map((issuer) => {
              if (!issuer?.code || !issuer.name) return null

              return (
                <option key={issuer.code} value={issuer.code}>
                  {issuer.name}
                </option>
              )
            })}
          </TextField>
        </FormRow>
      </form>
      {children}
    </Container>
  )
}
