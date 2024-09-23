'use strict';

/**
 * show-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::show-service.show-service');
