const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDef = `
`

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers});