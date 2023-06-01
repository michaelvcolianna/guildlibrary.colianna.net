import { defineNestedType, defineDocumentType, makeSource } from '@contentlayer/source-files'

export const Spoiler = defineNestedType(() => ({
  name: 'Spoiler',
  fields: {
    title: {
      type: 'string'
    },
    content: {
      type: 'markdown'
    }
  }
}))

export const Entry = defineDocumentType(() => ({
  name: 'Entry',
  filePathPattern: '**/*.md',
  fields: {
    ordering: {
      type: 'number',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    category: {
      type: 'string',
      required: true
    },
    hero: {
      type: 'string'
    },
    spoilers: {
      type: 'list',
      of: Spoiler
    },
    slug: {
      type: 'string'
    },
    created_at: {
      type: 'date'
    },
    updated_at: {
      type: 'date'
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (entry) => `/category/${entry.category}/${entry._raw.flattenedPath}`
    }
  }
}))

export default makeSource({
  contentDirPath: 'cms/content/entries',
  documentTypes: [Entry]
})
