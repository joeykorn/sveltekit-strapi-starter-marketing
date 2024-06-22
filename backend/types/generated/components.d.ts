import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCallToAction extends Schema.Component {
  collectionName: 'components_blocks_call_to_actions';
  info: {
    displayName: 'CallToAction';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    message: Attribute.String;
    linkPrimary: Attribute.String;
    image: Attribute.Media;
  };
}

export interface BlocksFeatures extends Schema.Component {
  collectionName: 'components_blocks_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    message: Attribute.String;
    features: Attribute.Component<'elements.features', true>;
  };
}

export interface BlocksFrequentlyAskedQuestions extends Schema.Component {
  collectionName: 'components_blocks_frequently_asked_questions';
  info: {
    displayName: 'FAQs';
    description: '';
  };
  attributes: {
    faqs: Attribute.Component<'elements.faqs', true>;
    heading: Attribute.String;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.String;
    linkPrimary: Attribute.String;
  };
}

export interface BlocksTestimonials extends Schema.Component {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'Testimonials';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    testimonials: Attribute.Component<'elements.testimonials', true>;
  };
}

export interface ElementsFaqs extends Schema.Component {
  collectionName: 'components_elements_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.String;
  };
}

export interface ElementsFeatures extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface ElementsTestimonials extends Schema.Component {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'testimonials';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    author: Attribute.String;
    avatar: Attribute.Media;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    socialLinks: Attribute.Component<'links.social-link', true>;
    footerLogo: Attribute.Component<'layout.logo'>;
    message: Attribute.String;
    menuLinks: Attribute.Component<'links.link', true>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    headerLogo: Attribute.Component<'layout.logo'>;
    links: Attribute.Component<'links.link', true>;
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

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'socialLink';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    social: Attribute.Enumeration<['Facebook', 'Instagram', 'X']>;
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
      'blocks.testimonials': BlocksTestimonials;
      'elements.faqs': ElementsFaqs;
      'elements.features': ElementsFeatures;
      'elements.testimonials': ElementsTestimonials;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.logo': LayoutLogo;
      'links.link': LinksLink;
      'links.social-link': LinksSocialLink;
      'shared.seo': SharedSeo;
    }
  }
}
