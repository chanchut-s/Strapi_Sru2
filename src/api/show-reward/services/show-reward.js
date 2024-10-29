'use strict';

/**
 * show-reward service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::show-reward.show-reward');
