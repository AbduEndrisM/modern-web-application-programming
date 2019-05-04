const hello = require ("./hello");
// hello();
// console.log("Hello World!");

// const index = require("./index");
// index.violin();
// index.clarinet();

// Using modules I
// const moduleOutput = require("./modules");
// moduleOutput();


// /Using Modules II - Function constructor
const course=require("./modules");
course.getCourseName();
console.log(course.courseName);

// const course=require("./modules");
// const cousreFunc = new course();
// cousreFunc.getCourseName();
// console.log(cousreFunc.courseName);
