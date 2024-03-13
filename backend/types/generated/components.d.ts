import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCallToAction extends Schema.Component {
  collectionName: 'components_content_display_call_to_actions';
  info: {
    displayName: 'CallToAction';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    message: Attribute.String;
    linkPrimary: Attribute.String;
  };
}

export interface BlocksFeatures extends Schema.Component {
  collectionName: 'components_content_display_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    heading: Attribute.String;
  };
}

export interface BlocksFrequentlyAskedQuestions extends Schema.Component {
  collectionName: 'components_content_display_frequently_asked_questions';
  info: {
    displayName: 'FAQs';
    description: '';
  };
  attributes: {
    faqs: Attribute.Relation<
      'blocks.frequently-asked-questions',
      'oneToMany',
      'api::faq.faq'
    >;
    heading: Attribute.String;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.String;
    linkPrimary: Attribute.String;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    headerLogo: Attribute.Component<'layout.logo'>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'logo';
    description: '';
  };
  attributes: {
    logoImage: Attribute.Media;
    logoText: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.call-to-action': BlocksCallToAction;
      'blocks.features': BlocksFeatures;
      'blocks.frequently-asked-questions': BlocksFrequentlyAskedQuestions;
      'blocks.hero': BlocksHero;
      'layout.header': LayoutHeader;
      'layout.logo': LayoutLogo;
      'shared.seo': SharedSeo;
    }
  }
}
