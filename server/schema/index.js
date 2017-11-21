const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDef = `
  type Query {
    persons: [Person]
    personByMajor(major: String!): [Person]
    personByName(firstName: String!,lastname: String, major: String!): Person
  }
  type Person {
    firstname: String!,
    lastname: String!,
    major: String!,
    interviewRef: String!
  }
`

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers});