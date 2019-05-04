function Course() {
    this.courseName = "CS572";
    this.getCourseName = function () {

        console.log(this.courseName);

    }


}
module.exports = new Course();
// module.exports= Course;



// //Module I
// module.exports=function(){
//     console.log("Outpust from Module");
// }
