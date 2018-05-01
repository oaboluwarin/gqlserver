const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const {
  getCourse,
  getCourses,
  updateCourseTopic,
  createNewCourse,
  removeCourse
} = require('./resolvers');

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

// Root resolver
const root = {
  course: getCourse,
  courses: getCourses,
  updateCourseTopic: updateCourseTopic,
  createCourse: createNewCourse,
  removeCourse
};

// Create an express server and a GraphQL endpoint
const app = express();

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Server Running On localhost:4000/graphql'));
