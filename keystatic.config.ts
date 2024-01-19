import { collection, config, fields } from '@keystatic/core'
import { __experimental_mdx_field } from '@keystatic/core/form/fields/markdoc'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      path: 'src/content/blog/*',
      slugField: 'title',
      format: {
        contentField: 'content',
      },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date' }),
        content: __experimental_mdx_field({ label: 'Content' }),
      },
    }),
  },
})
