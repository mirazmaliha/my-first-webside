// for lup factorial 
function factorial1(n1){
    var factorial1 = 1;
    for(var i = 1; i <= n1; i++){
        factorial1 = factorial1 * i;
       
}
       return factorial1
}
var factorialResult1 = factorial1(11)
console.log(factorialResult1);

// while lup factorial __-------
function factorial2(n2){
    var i = 1;
    var factorial2 = 1;
     while(i <= n2){
          factorial2 = factorial2 * i;
           i++;

}
     return factorial2;
}
var factorial1Result2 = factorial2(10);
console.log(factorial1Result2);

// recarsive factorial --------
function factorial3(n3){
    if(n3 <= 0){
        return 1;
    }else{
        return n3 * factorial3(n3 - 1);
    }
}
var factorialResult3 = factorial3(12);
console.log(factorialResult3);

// fivonacci for lup --------
function fivonacci1(n){


var fivo = [0, 1];
      for(var i = 2; i <= n; i++){
          fivo[i] = fivo[i - 1] + fivo[i - 2];
    
      }
      return fivo;
}
var fivonacci1Result1 = fivonacci1(20);
console.log(fivonacci1Result1);


// fivonacci recarsive 

function fivonacci2(n6){
    if(n6 == 0){
        return 0;
    } else if(n6 == 1){
        return 1;
    } else{
        return fivonacci2(n6 - 1) + fivonacci2(n6 - 2);
    }
}
var fivonacci2Result = fivonacci2(40);
console.log(fivonacci2Result);
//fivonacci recarsive 2 

function fivonacci3(n7){
    if(n7 == 0){
        return [0];
    } else if(n7 == 1){
        return [0, 1];
    }
    else{
        var fivo = fivonacci3(n7 - 1);
        var nextelement = fivo[n7 - 1] + fivo[n7 - 2];
        fivo.push(nextelement);
        return fivo;
    }
}
var fivonacci3Result = fivonacci3(8);
console.log(fivonacci3Result);