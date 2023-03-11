import { deskTool } from 'sanity/desk';
import { defineConfig } from "sanity";
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';


export default defineConfig({
  name: 'default',
  title: 'beige-cheetah',

  projectId: 'mlbkymr1',
  dataset: 'origin',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
