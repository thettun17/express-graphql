module.exports = `
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
`