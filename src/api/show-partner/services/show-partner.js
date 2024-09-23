'use strict';

/**
 * show-partner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::show-partner.show-partner');
