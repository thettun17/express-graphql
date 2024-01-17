const { mergeSchemas } = require("graphql-tools");
const eventSchema = require('../event/schema')

const schemas = mergeSchemas({
    schemas: [eventSchema],
  });
  
  module.exports = schemas;