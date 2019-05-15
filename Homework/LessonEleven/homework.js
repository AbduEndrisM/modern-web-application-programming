var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduating " + year + this.dept + "students");
    };
    return University;
}());
var mum = new University("MUM", "Compro");
mum.graduation(2020);
