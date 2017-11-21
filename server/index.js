const express = require('express')

// This package automatically parses JSON requests.
const bodyParser = require('body-parser')

// This package will handle GraphQL server requests and responses
// for you, based on your schema.
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express')

// schema for GraphQL
const schema = require('./schema/index')

const app = express()
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ 
  endpointURL: '/graphql',
}))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`listen http://localhost:${PORT}`)
})