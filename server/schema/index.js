const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Query {
    persons(major:String!, firstName: String): [Person]
  }
  type Person {
    firstName: String,
    lastName: String,
    major: String,
    interviewRef: String
  }
`

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers});