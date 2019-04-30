/*
Name:Abdu Endris
 ID:986899
 
 Name:Beteab Mekuria 
ID:986830

*/

// Filter words using 4 methods 
//ES6 features
String.prototype.filterWords = function(ignore){
    let theString = this;

    const stringArray = theString.split(" ");

    stringArray.map((x)=> {
            if (ignore.includes(x)) {
                theString =  theString.replace(x, "***")
            }
        }
    );
    console.log(theString);
};
"This house is nice !".filterWords(["house","nice"]);


//Using promise
String.prototype.filterWords= function(ignore){
    var theString = this;
    const stringArray = theString.split(" ");
    return new Promise(function (resolve) {

        stringArray.map((x)=> {
                if (ignore.includes(x)) {
                    theString =  theString.replace(x, "***")
                }
            }
        );
        resolve (theString);

    })
};
"This house is nice !".filterWords(["house","nice"]).then(data=>console.log(data));

//  String.prototype.filterWords =async function (ignore) {
//     var theString = this;
//     try{
//             let ret = await filter(theString,ignore);
//             console.log(ret);
//
//     }catch (e) {
//         console.log(e);
//     }
// }
//
//     function filter(stringVal,ignore) {
//         return new Promise(function (resolve) {
//
//             for(const key of ignore){
//                 if(stringVal.includes(key)){
//
//                     stringVal = stringVal.replace(key,"***");
//                 }
//
//             }
//             resolve (stringVal);
//
//         })
//
//     }

//using Async/Await
String.prototype.filterWords =async function (ignore) {
    var theString = this;
    const stringArray = theString.split(" ");
    try{
        let ret = await filter(stringArray,ignore,theString);
        console.log(ret);

    }catch (e) {
        console.log(e);
    }
}

function filter(stringVal,ignore,whole) {
    return new Promise(function (resolve) {

        stringVal.map((x)=> {
                if (ignore.includes(x)) {
                   whole  =  whole.replace(x, "***")
                }
            }
        );
        resolve (whole);

    })

}
"This house is nice !".filterWords(["house","nice"]);

//Using observables
String.prototype.filterWords= function(ignore){
    const theString = this;
    const {from} = rxjs;


    const stringArray = theString.split(" ");


let myPromise = filter(stringArray , ignore,theString);
    from(myPromise)


            .subscribe((obj)=>console.log(obj))


    function filter(stringVal,ignore,whole) {
        return new Promise(function (resolve) {

            stringVal.map((x)=> {
                    if (ignore.includes(x)) {
                        whole  =  whole.replace(x, "***")
                    }
                }
            );
            resolve (whole);

        })

    }
}

"This house is nice !".filterWords(["house","nice"]);