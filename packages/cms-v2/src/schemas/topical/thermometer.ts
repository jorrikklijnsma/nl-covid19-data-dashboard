import { SEVERITY_LEVELS_LIST } from '@corona-dashboard/app/src/components/severity-indicator-tile/constants';
import { REQUIRED } from '../../validation';
import { KpiIconInput } from '../../components/portable-text/kpi-configuration/kpi-icon-input';

export const thermometer = {
  type: 'object',
  title: 'Thermometer',
  name: 'thermometer',
  fieldsets: [
    {
      title: 'De beschrijving boven de thermometer',
      name: 'description',
      description: 'Klik op het label om de velden te tonen.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      title: 'Artikel referentie',
      name: 'artikel-referentie',
      description: 'Klik op het label om de velden te tonen.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      title: 'Titel van standen informatie',
      name: 'level-information',
      description: 'Klik op het label om de velden te tonen.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      title: 'Thermometer icoon',
      name: 'icon',
      type: 'string',
      inputComponent: KpiIconInput,
      validation: REQUIRED,
    },
    {
      title: 'De titel boven de thermometer',
      name: 'title',
      type: 'localeString',
      validation: REQUIRED,
    },
    {
      title: 'De beschrijving boven de thermometer',
      name: 'subTitle',
      type: 'localeRichContentBlock',
      fieldset: 'description',
    },
    {
      title: 'De titel binnen de thermometer tegel',
      name: 'tileTitle',
      type: 'localeString',
    },
    {
      title: 'Huidige stand',
      name: 'currentLevel',
      type: 'number',
      options: {
        list: SEVERITY_LEVELS_LIST,
        layout: 'dropdown',
      },
      validation: REQUIRED,
    },
    {
      title: 'Standen',
      name: 'thermometerLevels',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'thermometerLevel' } }],
      validation: REQUIRED,
    },
    {
      title: 'Datum tekst',
      description: 'Van wanneer was deze stand',
      name: 'datesLabel',
      type: 'localeString',
    },
    {
      title: 'Huidige stand omschrijving',
      description: 'De omschrijving specifiek voor de huidige thermometer stand bij de trendIcon',
      name: 'levelDescription',
      type: 'localeText',
      validation: REQUIRED,
    },
    {
      title: 'Bron tekst',
      name: 'sourceLabel',
      type: 'localeString',
    },
    {
      title: 'Artikel referentie',
      name: 'articleReference',
      type: 'localeRichContentBlock',
      fieldset: 'artikel-referentie',
    },
    {
      title: 'Titel van uitklapbare sectie',
      name: 'collapsibleTitle',
      type: 'localeString',
      validation: REQUIRED,
    },
    {
      title: 'Titel van standen informatie',
      name: 'trendIcon',
      type: 'trendIcon',
      fieldset: 'level-information',
    },
    {
      title: 'Tijdlijn',
      name: 'timeline',
      type: 'thermometerTimeline',
      validation: REQUIRED,
    },
  ],
};
