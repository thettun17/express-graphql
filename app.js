const express = require('express')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql")

const app = express()
const events = []

var schema = buildSchema(`
    type EventType {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
    }

    input EventInput {
        title: String!
        description: String!
        price: Float!
    }

    type Query {
        events: [EventType!]
    }

    type Mutation {
        createEvent(input: EventInput!): EventType
    }
`)

var resolver = {
    events: () => {
        return events
    },

    createEvent: (args) => {
        console.log(args.input)
        const event = {
            _id: Math.random().toString(),
            title: args.input.title,
            description: args.input.description,
            price: args.input.price,
            date: new Date().toISOString()
        }
        events.push(event)
        return event
    }
}

app.use(bodyParser.json())

app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: resolver,
      graphiql: true,
    })
)

app.listen(4000)