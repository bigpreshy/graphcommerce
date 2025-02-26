import { ApolloErrorSnackbar, ApolloErrorSnackbarProps } from '@graphcommerce/ecommerce-ui'
import { Trans } from '@lingui/react'
import { Button, Link } from '@mui/material'
import NextLink from 'next/link'
import { useCustomerSession } from '../../hooks/useCustomerSession'
import { useAuthorizationErrorMasked } from './useAuthorizationErrorMasked'

export type ApolloCustomerErrorSnackbarProps = ApolloErrorSnackbarProps

export function ApolloCustomerErrorSnackbar(props: ApolloCustomerErrorSnackbarProps) {
  const { error, action } = props
  const [newError, unauthorized] = useAuthorizationErrorMasked(error)
  const { token } = useCustomerSession()

  return (
    <ApolloErrorSnackbar
      {...props}
      action={
        unauthorized ? (
          <NextLink href='/account/signin' passHref>
            <Button variant='pill' color='secondary'>
              {token ? <Trans id='Sign in' /> : <Trans id='Create Account' />}
            </Button>
          </NextLink>
        ) : (
          action
        )
      }
    />
  )
}
