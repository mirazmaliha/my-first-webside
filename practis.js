let mirazBouName = "maliha akter";
if(mirazBouName.length < 13){
    mirazBouName = "picci bou";
}
console.log(mirazBouName);



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


function inchconvert(inch){
    const inchOne = inch / 12;
    return inchOne;
}
let inchConvertResult = inchconvert(36 + 12);
console.log(inchConvertResult);


let amarBouName = "sultana maliha";
if(amarBouName.length < 12){
    console.log("Maliha tasnim");
} else{
    console.log("picci maliha");
}



// factorial for lupp -----


function factorial1(n1){
    var fact1 = 1;
     for(var i = 1; i <= n1; i++){
       var fact1 = fact1 * i;
    }
   return fact1;
}
var resultForWhileFactorial = factorial1(5);
console.log(resultForWhileFactorial);


// factorial while lupp ------

function factorial2(n2){
    var i = 1;
    var factorial2 = 1;
    while(i <= n2){
    factorial2 = factorial2 * i;
    i++;
    }
    return factorial2
}
var resultWhileFactorial2 = factorial2(3);
console.log(resultWhileFactorial2);



// factorial recarsive -------


function factorial3(n3){
    if(n3 == 0 ){
        return 1;
    } else{
        return n3 * factorial3(n3 - 1);
    }
}
var resultRecarsiveFactorial = factorial3(12);
console.log(resultRecarsiveFactorial);