import type { Maybe } from '@graphcommerce/graphql-mesh'
import { RenderType } from '@graphcommerce/next-ui'
import React from 'react'
import type { ProductListItemConfigurableFragment } from './ProductListItemConfigurable.gql'
import { ColorSwatchData } from './Swatches/ColorSwatchData'
import { ImageSwatchData } from './Swatches/ImageSwatchData'
import { TextSwatchData } from './Swatches/TextSwatchData'
import { SwatchSize, SwatchTypeRenderer } from './Swatches/types'

type SwatchListProps = {
  attributes: string[]
  configurable_options: Maybe<ProductListItemConfigurableFragment['configurable_options']>
}

const renderer: SwatchTypeRenderer = {
  TextSwatchData,
  ImageSwatchData,
  ColorSwatchData,
}

export function SwatchList({ attributes, configurable_options }: SwatchListProps) {
  const options =
    configurable_options?.filter((option) => attributes.includes(option?.attribute_code ?? '')) ??
    []

  return (
    <>
      {options.map((option) => (
        <React.Fragment key={option?.attribute_code ?? ''}>
          {option?.values?.map((val) =>
            val?.swatch_data ? (
              <RenderType
                key={val?.uid ?? ''}
                renderer={renderer}
                {...val}
                {...val.swatch_data}
                size={'small' as SwatchSize}
              />
            ) : null,
          )}
        </React.Fragment>
      ))}
    </>
  )
}
