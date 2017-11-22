const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Query {
    persons: [Person]
    personByMajor(major: String!): [Person]
  }
  type Person {
    firstname: String,
    lastname: String,
    major: String,
    interviewRef: String
  }
`
//     personByName(firstName: String!,lastname: String, major: String!): Person
// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers});