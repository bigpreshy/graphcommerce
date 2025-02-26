import { Box, Typography, Link } from '@mui/material'
import PageLink from 'next/link'
import { Asset } from '../Asset/Asset'
import { Renderers } from './types'

export const defaultRenderers: Renderers = {
  'heading-one': (props) => <Typography variant='h1' {...props} />,
  'heading-two': (props) => <Typography variant='h2' {...props} />,
  'heading-three': (props) => <Typography variant='h3' {...props} />,
  'heading-four': (props) => <Typography variant='h4' {...props} />,
  'heading-five': (props) => <Typography variant='h5' {...props} />,
  'heading-six': (props) => <Typography variant='h6' {...props} />,
  paragraph: (props) => <Typography variant='body1' gutterBottom {...props} />,
  'bulleted-list': (props) => <Box component='ul' {...props} />,
  'numbered-list': (props) => <Box component='ol' {...props} />,
  'list-item': (props) => <Box component='li' {...props} />,
  'list-item-child': (props) => <Box component='span' {...props} />,
  'block-quote': (props) => <Box component='blockquote' {...props} />,
  iframe: (props) => {
    const { url, width, height, sx = [] } = props
    return (
      // todo add security attributes to iframe
      // todo make iframe responsive (generic IFrame component?)
      <Box
        component='iframe'
        src={url}
        loading='lazy'
        sx={[
          { aspectRatio: `${width} / ${height}`, width: '100%' },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      />
    )
  },
  image: ({ src, width, height, title, mimeType }) => (
    <Asset asset={{ url: src, alt: title, width, height, mimeType }} />
  ),
  video: ({ src, width, height, title, mimeType }) => (
    <Asset asset={{ url: src, alt: title, width, height, mimeType }} />
  ),
  link: ({ href, openInNewTab, ...props }) => (
    <PageLink href={href} passHref>
      <Link underline='hover' {...props} target={openInNewTab ? '_blank' : undefined} />
    </PageLink>
  ),
  table: (props) => <Box component='table' {...props} />,
  table_head: (props) => <Box component='thead' {...props} />,
  table_header_cell: (props) => <Box component='th' {...props} />,
  table_body: (props) => <Box component='tbody' {...props} />,
  table_row: (props) => <Box component='tr' {...props} />,
  table_cell: (props) => <Box component='td' {...props} />,
  code: (props) => <Box component='code' {...props} />,
  bold: (props) => <Box component='strong' fontWeight='bold' {...props} />,
  italic: (props) => <Box component='em' fontStyle='italic' {...props} />,
  underlined: (props) => <Box component='span' {...props} />,
}
