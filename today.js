// name chnage ------

var amarName = "miraz hosen";
if(amarName.length > 4){
    amarName = "miraz";
}
console.log(amarName);

// leap yer ----------

function leapYer(yer){
    var yer2 = yer % 4;
    if(yer2 == 0){
        return true;
    } else{
        return false;
    }
}
function inchConvert(n){
    var inch2 = n / 12;
    return inch2;
}
var inchConvertResult = inchConvert(36);
console.log(inchConvertResult);


function factorial1(n){
       var factorial1 = 1;
    for(var i = 1; i <= n; i++){
       var factorial1 = factorial1 * i;
    }
   return factorial1;
}
var factorial1Result = factorial1(20);
console.log(factorial1Result);

function factorial2(n){
    var i = 1;
    var factorial2 = 1;
    while(i <= n){
        var factorial2 = factorial2 * i;
        i++;
    }
    return factorial2;
}
var factorial2Result = factorial2(11);
console.log(factorial2Result);

function factorial3(n){
    if(n == 0){
        return 1;
    } else{
        return n * factorial3(n - 1);
    }
}
var factorial3Result = factorial3(5);
console.log(factorial3Result);


function fiboNacci1(n){
       var fibo = [0, 1];
    for(var i = 2; i <= n; i++){
       fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var fibo1Result = fiboNacci1(12);
console.log(fibo1Result);

function fiboNacci2(n){
    if(n == 0){
        return 0;
    } else if(n == 1){
        return 1;
    } else{
        return fiboNacci2(n - 1) + fiboNacci2(n - 2);
    }
}
var fiboNacci2Result = fiboNacci2(15);
console.log(fiboNacci2Result);

function fiboNacci3(n){
    if(n == 0){
        return [0];
    } else if(n == 1){
        return [0, 1];
    } else{
        var fibo = fiboNacci3(n - 1);
        var nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}
var fiboNacci3result = fiboNacci3(7);
console.log(fiboNacci3result);