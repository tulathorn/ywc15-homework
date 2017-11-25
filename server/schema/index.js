const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

// Type for GraphQL
const typeDefs = `
  # Root type for query data
  type Query {
    # For query data for YWC15 qualiflier 
    persons(major:String!, firstName: String): [Person]
  }
  # Type for Mapping data from YWC15 api, set variable as the api
  type Person {
    firstName: String,
    lastName: String,
    major: String,
    interviewRef: String
  }
`

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers});