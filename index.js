/**
 * Entry point for orchestrator lambda function
 */
'use strict';

const
  app = require('./src/app');


module.exports = {
  routesHandler: app.createRoutesHandler(),
  setupPipelineTask: app.setupPipelineTask()
};