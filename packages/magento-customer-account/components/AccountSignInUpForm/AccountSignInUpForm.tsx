import {
  ApolloCustomerErrorAlert,
  SignInForm,
  SignUpForm,
  useFormIsEmailAvailable,
  CustomerDocument,
} from '@graphcommerce/magento-customer'
import { useCustomerQuery } from '@graphcommerce/magento-customer/hooks'
import {
  AnimatedRow,
  Button,
  FormDiv,
  FormActions,
  FormRow,
  LayoutTitle,
  extendableComponent,
} from '@graphcommerce/next-ui'
import { emailPattern, useFormPersist } from '@graphcommerce/react-hook-form'
import { Trans } from '@lingui/react'
import { Box, CircularProgress, Link, SxProps, TextField, Theme, Typography } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import PageLink from 'next/link'
import router from 'next/router'

export type AccountSignInUpFormProps = { sx?: SxProps<Theme> }

const parts = ['root', 'titleContainer'] as const
const { classes } = extendableComponent('AccountSignInUpForm', parts)

const titleContainerSx: SxProps<Theme> = (theme) => ({
  typography: 'body1',
  marginBottom: theme.spacings.xs,
})

export function AccountSignInUpForm(props: AccountSignInUpFormProps) {
  const { sx = [] } = props
  const customerQuery = useCustomerQuery(CustomerDocument)

  const { email, firstname = '' } = customerQuery.data?.customer ?? {}
  const { mode, form, autoSubmitting, submit } = useFormIsEmailAvailable({ email })
  const { formState, muiRegister, required, watch, error } = form
  const disableFields = formState.isSubmitting && !autoSubmitting

  return (
    <FormDiv sx={sx} className={classes.root}>
      {mode === 'email' && (
        <Box className={classes.titleContainer} key='email' sx={titleContainerSx}>
          <LayoutTitle variant='h2' gutterBottom={false}>
            <Trans id='Sign in or create an account!' />
          </LayoutTitle>
          <Typography variant='h6' align='center'>
            <Trans id='Fill in your e-mail to login or create an account' />
          </Typography>
        </Box>
      )}

      {mode === 'signin' && (
        <Box className={classes.titleContainer} key='signin' sx={titleContainerSx}>
          <LayoutTitle variant='h2' gutterBottom={false}>
            <Trans id='Welcome back!' />
          </LayoutTitle>
          <Typography variant='h6' align='center'>
            <Trans id='Fill in your password' />
          </Typography>
        </Box>
      )}

      {mode === 'signup' && (
        <Box className={classes.titleContainer} key='signup' sx={titleContainerSx}>
          <LayoutTitle variant='h2' gutterBottom={false}>
            <Trans id='Create account!' />
          </LayoutTitle>
          <Typography variant='h6' align='center'>
            <Trans id='Create a password and tell us your name' />
          </Typography>
        </Box>
      )}

      {mode === 'signedin' && (
        <Box className={classes.titleContainer} key='signup' sx={titleContainerSx}>
          <LayoutTitle variant='h2' gutterBottom={false}>
            <Trans id='Hi {firstname}! You’re now logged in!' values={{ firstname }} />
          </LayoutTitle>
          <Typography variant='h6' align='center'>
            <PageLink href='/account' passHref>
              <Link underline='hover'>
                <Trans id='View your account' />
              </Link>
            </PageLink>
          </Typography>

          <FormActions>
            <Button onClick={() => router.back()} variant='pill' color='secondary' size='large'>
              <Trans id='Continue shopping' />
            </Button>
          </FormActions>
        </Box>
      )}

      {mode === 'session-expired' && (
        <Box className={classes.titleContainer} key='email' sx={titleContainerSx}>
          <LayoutTitle variant='h2' gutterBottom={false}>
            <Trans id='Your session is expired' />
          </LayoutTitle>
          <Typography variant='h6' align='center'>
            <Trans id='Log in to continue shopping' />
          </Typography>
        </Box>
      )}

      <AnimatePresence>
        {mode !== 'signedin' && (
          <form noValidate onSubmit={submit} key='emailform'>
            <AnimatedRow key='email'>
              <FormRow>
                <TextField
                  key='email'
                  variant='outlined'
                  type='text'
                  autoComplete='email'
                  error={formState.isSubmitted && !!formState.errors.email}
                  helperText={formState.isSubmitted && formState.errors.email?.message}
                  label={<Trans id='Email' />}
                  required={required.email}
                  disabled={disableFields}
                  {...muiRegister('email', {
                    required: required.email,
                    pattern: { value: emailPattern, message: '' },
                  })}
                  InputProps={{
                    endAdornment: formState.isSubmitting && <CircularProgress />,
                    readOnly: !!customerQuery.data?.customer?.email,
                  }}
                />
              </FormRow>
            </AnimatedRow>

            <ApolloCustomerErrorAlert error={error} />

            {(mode === 'email' || mode === 'session-expired') && (
              <AnimatedRow key='submit-form'>
                <FormActions>
                  <Button
                    type='submit'
                    loading={formState.isSubmitting}
                    variant='contained'
                    color='primary'
                    size='large'
                  >
                    <Trans id='Continue' />
                  </Button>
                </FormActions>
              </AnimatedRow>
            )}
          </form>
        )}

        {mode === 'signin' && (
          <AnimatedRow key='signin'>
            <SignInForm email={watch('email')} />
          </AnimatedRow>
        )}

        {mode === 'signup' && (
          <AnimatedRow key='signup'>
            <SignUpForm email={watch('email')} />
          </AnimatedRow>
        )}
      </AnimatePresence>
    </FormDiv>
  )
}
