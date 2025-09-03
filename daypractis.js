// leap yer ----------
function leapYer(yer){
    var leapYers = yer % 4;
    if(leapYers == 0){
        return true;
    }else{
        return false;
    }
}
var leapYerResult = leapYer(2000);
console.log(leapYerResult);

// if else ar use -----------

var myNmae = "miraz hosen";
if(myNmae.length > 5){
    myName = "miraz";
}
console.log(myName);

// factorial for lup --------

function factorial1(n){
    var factorial1 = 1;
    for(var i = 1; i <= n; i++){
       factorial1 = factorial1 * i;
    }
       return factorial1;
}
var factorial1Result = factorial1(11);
console.log(factorial1Result);

// factorial while lup --------
function factorial2(n){
    var i = 1;
var factorial2 = 1;
while(i <= n){
    factorial2 = factorial2 * i;
         i++;
    }
    return factorial2;
}
var factorial2Result = factorial2(5);
console.log(factorial2Result);
// factorial recarsive ------------

function factorial3(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial3(n - 1);
    }
}
var factorial3result = factorial3(7);
console.log(factorial3result);

// fibonacci for lup --------

function fibonacci1(n){
    var fibo = [0, 1];
    for(var i = 2; i <= n; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var fibonacci1Result = fibonacci1(12);
console.log(fibonacci1Result);

// fibonacci recarsive -------
function fibonacci2(n){
    if(n == 0){
        return 0;
    } else if(n == 1){
        return 1;
    } else{
        return fibonacci2(n - 1) + fibonacci2(n - 2);
    }
}
var fibonacci2Result = fibonacci2(15);
console.log(fibonacci2Result);

// fibonacci recarsive 2 ---------

function fibonacci3(n){
    if(n == 0){
        return [0];
    } else if(n == 1){
        return [0, 1];
    } else{
        var fibo = fibonacci3(n - 1);
        var nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}
var fibonacci3Result = fibonacci3(16);
console.log(fibonacci3Result);