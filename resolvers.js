const coursesData = require('./coursesData');

module.exports = {
  async getCourse(args) {
    const { id } = args;
    return await coursesData.filter(course => {
        return course.id == id;
    })[0];
  },

  async getCourses(args) {
    const { topic } = args;
    if (topic) {
        return await coursesData.filter(course => course.topic === topic);
    } else {
        return await coursesData;
    }
  },
  async updateCourseTopic ({id, topic}) {
    await coursesData.map(course => {
        if (course.id === id) {
            course.topic = topic;
            return course;
        }
    });
    return await coursesData.filter(course => course.id === id) [0];
  }
}
