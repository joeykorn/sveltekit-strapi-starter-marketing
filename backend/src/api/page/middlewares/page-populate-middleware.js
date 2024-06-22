'use strict';

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  blocks: {
    on: {
      'blocks.hero': {
        populate: '*'
      },
      'blocks.call-to-action': {
        populate: '*'
      },
      'blocks.features': {
        populate: {
          'features': {
            populate: {
              'icon': {
                fields: ["url", "alternativeText", "caption", "width", "height"],
              }
            }
          }
        }
      },
      'blocks.frequently-asked-questions': {
        populate: '*'
      },
      'blocks.testimonials': {
        populate: {
          'testimonials': {
            populate: {
              'avatar': {
                fields: ["url", "alternativeText", "caption", "width", "height"],
              }
            }
          }
        }
      },

    }
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
    };
    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);
    // strapi.log.info('In page-populate-middleware middleware.');

    await next();
  };
};
