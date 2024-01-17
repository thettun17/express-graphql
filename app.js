const express = require('express')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require("express-graphql")
const schema = require('./graphql/schema')
const resolver = require('./graphql/reslover')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())

app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: resolver,
      graphiql: true,
    })
)

mongoose.connect('mongodb+srv://thettun1741997:1112019-tt@kilotaxi.ntwhcrt.mongodb.net/testing?retryWrites=true&w=majority')
.then(result => {
  app.listen(4000)
})
.catch(error => {
  console.log(error)
})