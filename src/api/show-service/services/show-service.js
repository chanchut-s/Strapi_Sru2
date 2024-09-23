'use strict';

/**
 * show-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::show-service.show-service');
