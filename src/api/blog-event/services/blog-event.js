'use strict';

/**
 * blog-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-event.blog-event');
