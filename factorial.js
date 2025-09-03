
//factorial for lupp ----


function factorial(num){
     var fact = 1;
     for(var i = 1; i <= num; i++){
     var fact = fact * i;
     
     }
     return fact;
}
var result = factorial(5);
console.log(result);

//factorial while lupp  ----

function factorial2(n){
    var i = 1;
    var fact2 = 1;
    while(i <= n){
        fact2 = fact2 * i;
        i++;
    }
    return fact2;
}
var factorial2Result = factorial2(7);
console.log(factorial2Result);

//factorial recarsive  -----


function factorial3(n2){
    if(n2 == 0){
        return 1;
    } else{
        return n2 * factorial3(n2 - 1);
    }
}
var resultRecarsive = factorial3(15);
console.log(resultRecarsive);