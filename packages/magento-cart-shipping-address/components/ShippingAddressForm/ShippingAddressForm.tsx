import { useQuery } from '@graphcommerce/graphql'
import {
  ApolloCartErrorAlert,
  useCartQuery,
  useFormGqlMutationCart,
} from '@graphcommerce/magento-cart'
import { AddressFields, CustomerDocument, NameFields } from '@graphcommerce/magento-customer'
import { CountryRegionsDocument, StoreConfigDocument } from '@graphcommerce/magento-store'
import { Form, FormRow, InputCheckmark } from '@graphcommerce/next-ui'
import {
  phonePattern,
  useFormAutoSubmit,
  useFormCompose,
  UseFormComposeOptions,
  useFormPersist,
} from '@graphcommerce/react-hook-form'
import { i18n } from '@lingui/core'
import { Trans } from '@lingui/react'
import { TextField } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import { isSameAddress } from '../../utils/isSameAddress'
import { GetAddressesDocument } from './GetAddresses.gql'
import { SetShippingAddressDocument } from './SetShippingAddress.gql'
import { SetShippingBillingAddressDocument } from './SetShippingBillingAddress.gql'

export type ShippingAddressFormProps = Pick<UseFormComposeOptions, 'step'> & {
  ignoreCache?: boolean
}

export function ShippingAddressForm(props: ShippingAddressFormProps) {
  const { step, ignoreCache = false } = props
  const { data: cartQuery } = useCartQuery(GetAddressesDocument)
  const { data: config } = useQuery(StoreConfigDocument)
  const { data: countriesData } = useQuery(CountryRegionsDocument)
  const { data: customerQuery } = useQuery(CustomerDocument, { fetchPolicy: 'cache-only' })

  const shopCountry = config?.storeConfig?.locale?.split('_')?.[1].toUpperCase()

  const currentAddress = cartQuery?.cart?.shipping_addresses?.[0]
  const currentCustomer = customerQuery?.customer
  const currentCountryCode = currentAddress?.country.code ?? shopCountry

  const shippingAddress = cartQuery?.cart?.shipping_addresses?.[0]
  const billingAddress = cartQuery?.cart?.billing_address

  const Mutation = isSameAddress(shippingAddress, billingAddress)
    ? SetShippingBillingAddressDocument
    : SetShippingAddressDocument

  // If address is an existing customer address then this form is rendered to add a new address so we don't want any default values.

  const form = useFormGqlMutationCart(Mutation, {
    defaultValues: ignoreCache
      ? { saveInAddressBook: true }
      : {
          // todo(paales): change to something more sustainable
          firstname: currentAddress?.firstname ?? currentCustomer?.firstname ?? '',
          lastname: currentAddress?.lastname ?? currentCustomer?.lastname ?? '',
          telephone:
            currentAddress?.telephone !== '000 - 000 0000' ? currentAddress?.telephone : '',
          city: currentAddress?.city ?? '',
          company: currentAddress?.company ?? '',
          postcode: currentAddress?.postcode ?? '',
          street: currentAddress?.street?.[0] ?? '',
          houseNumber: currentAddress?.street?.[1] ?? '',
          addition: currentAddress?.street?.[2] ?? '',
          regionId: currentAddress?.region?.region_id ?? null,
          countryCode: currentCountryCode, // todo: replace by the default shipping country of the store + geoip,
          saveInAddressBook: true,
        },
    mode: 'onChange',
    onBeforeSubmit: (variables) => {
      const regionId = countriesData?.countries
        ?.find((country) => country?.two_letter_abbreviation === variables.countryCode)
        ?.available_regions?.find((region) => region?.id === variables.regionId)?.id

      return {
        ...variables,
        telephone: variables.telephone || '000 - 000 0000',
        regionId,
        customerNote: '',
      }
    },
  })
  const { muiRegister, handleSubmit, valid, formState, required, error } = form
  const submit = handleSubmit(() => {})

  useFormPersist({ form, name: 'ShippingAddressForm' })
  useFormCompose({ form, step, submit, key: 'ShippingAddressForm' })

  const autoSubmitting = useFormAutoSubmit({
    form,
    submit,
    fields: ['postcode', 'countryCode', 'regionId'],
  })
  const readOnly = formState.isSubmitting && !autoSubmitting

  return (
    <Form onSubmit={submit} noValidate>
      <AnimatePresence initial={false}>
        <NameFields form={form} key='name' readOnly={readOnly} />
        <AddressFields form={form} key='addressfields' readOnly={readOnly} />
        <FormRow key='telephone'>
          <TextField
            variant='outlined'
            type='text'
            error={!!formState.errors.telephone}
            required={required.telephone}
            label={<Trans id='Telephone' />}
            {...muiRegister('telephone', {
              required: required.telephone,
              pattern: { value: phonePattern, message: i18n._(/* i18n */ `Invalid phone number`) },
            })}
            helperText={formState.isSubmitted && formState.errors.telephone?.message}
            InputProps={{
              readOnly,
              endAdornment: <InputCheckmark show={valid.telephone} />,
            }}
          />
        </FormRow>
        <ApolloCartErrorAlert error={error} />
      </AnimatePresence>
    </Form>
  )
}
