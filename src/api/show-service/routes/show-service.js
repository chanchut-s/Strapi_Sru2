'use strict';

/**
 * show-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::show-service.show-service');
