import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemas } from './sanity/schemas';
import { deskStructure } from './sanity/deskStructure';

export default defineConfig({
  name: 'baldo-vino',
  title: 'Baldo Vino CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  basePath: '/studio',
  plugins: [structureTool({ structure: deskStructure })],
  schema: { types: schemas },
});
