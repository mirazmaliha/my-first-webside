/** 
let amarName = "Miraz hosen";
if(amarName.length > 4){
    amarName = "Miraz"
}
console.log(amarName);

// lepp yer --------

function leepYer(yer){
    var yer2 = yer % 4;
    if(yer2 == 0){
        return true;
    } else{
        return false;
    }
}
let leepYerResult = leepYer(2001);
console.log(leepYerResult);

//inch converter 

function inchConvert(inch){
    const inch2 = inch / 12;
    return inch2;
}
var inchResult = inchConvert(24);
console.log(inchResult);

// for factorial ---------

function factorial1(n1){
    var factorial1 = 1;
   for(var i = 1; i <= n1; i++){
     var factorial1 = factorial1 * i;

   }
     return factorial1;
}
var factorial1Result1 = factorial1(7);
console.log(factorial1Result1);

// while factorial ---------


function factorial2(n2){
    var i = 1;
    var factorial2 = 1;
    while(i <= n2){
    var factorial2 = factorial2 * i;
    i++;
    }
    return factorial2;
}

var factorialResult2 = factorial2(15);
console.log(factorialResult2);


// recarsive factorial -----

function factorial3(n3){
    if(n3 == 0){
        return 1;
    } else{
       return n3 * factorial3(n3 - 1);
    }
}

var factorial3Result = factorial3(9);
console.log(factorial3Result);
*/


let amarName = "miraz khondokar";
if(amarName.length > 4){
    amarName = "Miraz Maliha";
}
console.log(amarName);

// inch converter

function inchConvert(inch){
    var inch2 = inch / 12;
    return inch2;
}
var inchConvertResult = inchConvert(24 + 24);
console.log(inchConvertResult);

//leep yer 

function leepYer(yer){
    var yer2 = yer % 4;
    if(yer2 == 0){
        return true;
    } else{
        return false;
    }
}
var leepYerResult = leepYer(2001);
console.log(leepYerResult);

// for factorial ------

function factorial1(n1){
    var factorial1 = 1;
        for(var i = 1; i <= n1; i++){
        var factorial1 = factorial1 * i;

        }
          return factorial1;
}
var factorialResult1 = factorial1(5);
console.log(factorialResult1);

// while factirial

var i = 10;
var factorial2 = 1;
while(i >= 1){
    factorial2 = factorial2 * i;
    i--;
    console.log(i, factorial2);
}


//re4carsive factorial

function factorial3(n3){
    if(n3 == 0 ){
        return 1;
    } else{
        return n3 * factorial3(n3 - 1);
    }
}
var recarsiveFactorialResult = factorial3(12);
console.log(recarsiveFactorialResult);