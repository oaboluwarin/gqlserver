const express = require('express');
const express_graphql = require('express-graphql');
const schema = require('./schema');
const {
  getCourse,
  getCourses,
  updateCourseTopic,
  createNewCourse,
  removeCourse
} = require('./resolvers');

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
