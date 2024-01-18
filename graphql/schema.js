const { buildSchema } = require("graphql")
const eventSchema = require('../event/schema')

module.exports = buildSchema(eventSchema);