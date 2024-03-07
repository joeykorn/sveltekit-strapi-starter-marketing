import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentDisplayHero extends Schema.Component {
  collectionName: 'components_content_display_heroes';
  info: {
    displayName: 'hero';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content-display.hero': ContentDisplayHero;
    }
  }
}
