import { useMutation } from '@graphcommerce/graphql'
import {
  ApolloCartErrorAlert,
  useCartQuery,
  useMergeCustomerCart,
} from '@graphcommerce/magento-cart'
import {
  SignInFormInline,
  SignUpFormInline,
  useFormIsEmailAvailable,
} from '@graphcommerce/magento-customer'
import { AnimatedRow, extendableComponent, FormDiv, FormRow } from '@graphcommerce/next-ui'
import { emailPattern, useFormCompose, UseFormComposeOptions } from '@graphcommerce/react-hook-form'
import { Trans } from '@lingui/react'
import { CircularProgress, TextField, Typography, Alert, Button } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import PageLink from 'next/link'
import React, { useEffect, useState } from 'react'
import { CartEmailDocument } from './CartEmail.gql'
import { SetGuestEmailOnCartDocument } from './SetGuestEmailOnCart.gql'

export type EmailFormProps = Pick<UseFormComposeOptions, 'step'> & {
  children?: React.ReactNode
}

const name = 'EmailForm' as const
const parts = ['root', 'formRow'] as const
const { classes } = extendableComponent(name, parts)

export function EmailForm(props: EmailFormProps) {
  const { step, children } = props

  const [setGuestEmailOnCart] = useMutation(SetGuestEmailOnCartDocument)
  const { data: cartData } = useCartQuery(CartEmailDocument)

  const { mode, form, submit } = useFormIsEmailAvailable({ email: cartData?.cart?.email })

  const { formState, muiRegister, required, watch, error, getValues } = form

  useFormCompose({ form, step, submit, key: 'EmailForm' })

  useEffect(() => {
    if (!cartData?.cart?.id) return

    // Customer isn't logged in, but we do have a valid email
    if (mode === 'signin' || mode === 'signup') {
      const [email] = getValues(['email'])

      if (cartData.cart.email === email) return
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      setGuestEmailOnCart({ variables: { email, cartId: cartData.cart.id } })
    }
  }, [mode, getValues, cartData?.cart?.id, setGuestEmailOnCart, cartData?.cart?.email])

  let endAdornment: React.ReactNode = null

  if (mode === 'signin') {
    endAdornment = (
      <PageLink href='/account/signin' passHref>
        <Button color='secondary' style={{ whiteSpace: 'nowrap' }}>
          <Trans id='Sign in' />
        </Button>
      </PageLink>
    )
  }
  if (formState.isSubmitting) endAdornment = <CircularProgress />

  return (
    <form noValidate onSubmit={submit}>
      <FormRow>
        <Typography variant='h5' component='h2' gutterBottom>
          <Trans id='Personal details' />
        </Typography>
      </FormRow>
      <FormRow className={classes.formRow} sx={{ py: 0 }}>
        <TextField
          variant='outlined'
          type='email'
          error={formState.isSubmitted && !!formState.errors.email}
          helperText={formState.isSubmitted && formState.errors.email?.message}
          label={<Trans id='Email' />}
          required={required.email}
          {...muiRegister('email', {
            required: required.email,
            pattern: { value: emailPattern, message: '' },
          })}
          InputProps={{
            autoComplete: 'email',
            endAdornment,
            readOnly: mode === 'signedin' || mode === 'session-expired',
          }}
        />
      </FormRow>
      <ApolloCartErrorAlert error={error} />
    </form>
  )
}
