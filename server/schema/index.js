const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Query {
    persons: [Person]
    personInContent: [Person]
    personInMarketing: [Person]
    personInDesign: [Person]
    personInProgramming: [Person]
  }
  type Person {
    firstName: String,
    lastName: String,
    major: String,
    interviewRef: String
  }
`

// Note for typeDef
// personByName(firstName: String!,lastname: String, major: String!): Person
// personByMajor(major: String!): [Person]



// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers});