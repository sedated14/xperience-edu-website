import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'xperienceedu-blog',
  title: 'XperienceEdu Blog',
  
  projectId: '2fmqiz19', // Xperience Education Blog
  dataset: 'production',
  
  plugins: [structureTool()],
  
  schema: {
    types: schemaTypes,
  },
})
