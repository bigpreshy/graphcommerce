import { ScrollerProvider, ScrollSnapType } from '@graphcommerce/framer-scroller'
import type { SetOptional } from 'type-fest'
import { LayoutOverlayBase, LayoutOverlayBaseProps } from './LayoutOverlayBase'

export type { LayoutOverlayVariant } from './LayoutOverlayBase'

export type LayoutOverlayProps = SetOptional<LayoutOverlayBaseProps, 'variantSm' | 'variantMd'>

export function LayoutOverlay(props: LayoutOverlayProps) {
  const { children, variantSm = 'bottom', variantMd = 'right', ...otherProps } = props

  const scrollSnapTypeSm: ScrollSnapType =
    variantSm === 'left' || variantSm === 'right' ? 'inline mandatory' : 'block proximity'
  const scrollSnapTypeMd: ScrollSnapType =
    variantMd === 'left' || variantMd === 'right' ? 'inline mandatory' : 'block proximity'

  return (
    <ScrollerProvider scrollSnapTypeSm={scrollSnapTypeSm} scrollSnapTypeMd={scrollSnapTypeMd}>
      <LayoutOverlayBase variantMd={variantMd} variantSm={variantSm} {...otherProps}>
        {children}
      </LayoutOverlayBase>
    </ScrollerProvider>
  )
}
