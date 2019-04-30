

//Is weeken? without using if else/conditional statement 
function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay();
    return   isWeekend.check[day]|| isWeekend.check['default'];
}

isWeekend.check ={
    0:"Weekend",
    6:"Weekend",
    default:"weekday"
};
console.log(isWeekend());