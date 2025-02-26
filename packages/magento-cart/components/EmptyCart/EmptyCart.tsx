import { FullPageMessage, IconSvg, iconShoppingBag } from '@graphcommerce/next-ui'
import { Trans } from '@lingui/react'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type EmptyCartProps = { children?: React.ReactNode }
export function EmptyCart(props: EmptyCartProps) {
  const { children } = props

  return (
    <FullPageMessage
      title={<Trans id='Your cart is empty' />}
      icon={<IconSvg src={iconShoppingBag} size='xxl' />}
      button={
        <Link href='/' passHref>
          <Button variant='pill' color='secondary' size='large'>
            <Trans id='Continue shopping' />
          </Button>
        </Link>
      }
    >
      {children ?? <Trans id='Discover our collection and add items to your cart!' />}
    </FullPageMessage>
  )
}
