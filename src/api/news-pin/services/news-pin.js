'use strict';

/**
 * news-pin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-pin.news-pin');
