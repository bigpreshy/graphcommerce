import { FormRow, InputCheckmark } from '@graphcommerce/next-ui'
import { assertFormGqlOperation, Controller, UseFormReturn } from '@graphcommerce/react-hook-form'
import { i18n } from '@lingui/core'
import { Trans } from '@lingui/react'
import { MenuItem, TextField } from '@mui/material'
import React from 'react'

type NameFieldValues = {
  firstname?: string
  lastname?: string
  prefix?: string
}

type NameFieldProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>
  readOnly?: boolean
  prefix?: boolean
  prefixes?: string[]
}

export function NameFields(props: NameFieldProps) {
  const mr = i18n._(/* i18n */ `Mr`)
  const mrs = i18n._(/* i18n */ `Mrs`)
  const other = i18n._(/* i18n */ `Other`)

  const { prefix, form, readOnly, prefixes = [mr, mrs, other] } = props
  assertFormGqlOperation<NameFieldValues>(form)

  const { control, formState, muiRegister, required, valid } = form

  return (
    <>
      {prefix && (
        <FormRow>
          <Controller
            defaultValue={prefixes[0]}
            control={control}
            name='prefix'
            render={({ field: { ref, onChange, ...field }, fieldState }) => (
              <TextField
                variant='outlined'
                select
                error={!!fieldState.error}
                label={<Trans id='Prefix' />}
                required={!!required?.prefix}
                helperText={fieldState.error?.message}
                onChange={(e) => onChange(e.target.value)}
                inputRef={ref}
                InputProps={{
                  readOnly,
                  endAdornment: <InputCheckmark show={valid.prefix} select />,
                }}
                {...field}
              >
                {prefixes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </FormRow>
      )}

      <FormRow>
        <TextField
          variant='outlined'
          type='text'
          label={<Trans id='First Name' />}
          required={!!required}
          error={!!formState.errors.firstname}
          helperText={formState.isSubmitted && formState.errors.firstname?.message}
          InputProps={{
            readOnly,
            endAdornment: <InputCheckmark show={valid.firstname} />,
          }}
          {...muiRegister('firstname', { required: required?.firstname })}
        />
        <TextField
          variant='outlined'
          type='text'
          error={!!formState.errors.lastname}
          label={<Trans id='Last Name' />}
          required={!!required?.lastname}
          helperText={formState.isSubmitted && formState.errors.lastname?.message}
          InputProps={{
            readOnly,
            endAdornment: <InputCheckmark show={valid.lastname} />,
          }}
          {...muiRegister('lastname', { required: required?.lastname })}
        />
      </FormRow>
    </>
  )
}
