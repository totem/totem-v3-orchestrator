/**
 * Task for setting up pipeline
 */
'use strict';

const
  constants = require('../common/constants'),
  bottle = constants.BOTTLE_CONTAINER;

class SetupPipelineHandler {

  constructor() {}

  handle(event, context, callback) {
    return callback(null, {
      event: 'setup-complete'
    });
  }
}

bottle.service('tasks-setup-pipeline', SetupPipelineHandler);

module.exports = SetupPipelineHandler;