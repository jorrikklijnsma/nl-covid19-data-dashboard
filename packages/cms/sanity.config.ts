import { dashboardTool } from '@sanity/dashboard';
import { languageFilter } from '@sanity/language-filter';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { media } from 'sanity-plugin-media';
import { deskTool } from 'sanity/desk';
import { Logo } from './src/components/logo';
import { schemaTypes } from './src/schemas';
import { deskStructure } from './src/studio/desk-structure/desk-structure';
import { actions, newDocumentOptions } from './src/studio/document-options/document-options';
import { supportedLanguages } from './src/studio/i18n';
import { theme } from './src/studio/theme';
import { tools } from './src/studio/tools';
import { widgets } from './src/studio/widgets';

export default defineConfig({
  title: 'Coronavirus Dashboard CMS',
  projectId: '5mog5ask',
  dataset: process.env.SANITY_STUDIO_DATASET ?? 'production',
  plugins: [
    dashboardTool({
      widgets,
    }),
    deskTool({
      structure: deskStructure,
    }),
    media(),
    visionTool(),
    languageFilter({
      supportedLanguages,
      defaultLanguages: ['nl'],
      filterField: (enclosingType, field, selectedLanguageIds) => !enclosingType.name.startsWith('locale') || selectedLanguageIds.includes(field.name),
    }),
  ],
  schema: { types: schemaTypes },
  studio: { components: { logo: Logo } },
  document: { newDocumentOptions, actions },
  tools,
  theme,
});
