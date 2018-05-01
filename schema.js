const { buildSchema } = require('graphql');

// GraphQL schema
const schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
  }
  type Mutation {
    updateCourseTopic(id: Int!, topic: String!): Course
    createCourse(topic: String!, title: String!, author: String!, description: String!, url: String!): Course
    removeCourse(id: Int!): Course
  }
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);

module.exports = schema;
