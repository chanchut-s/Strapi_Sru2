'use strict';

/**
 * show-hero-banner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::show-hero-banner.show-hero-banner');
