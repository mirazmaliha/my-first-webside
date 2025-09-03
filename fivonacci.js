function fivonacci(n1){
    var fivo = [0, 1];
    for(var i = 2; i <= n1; i++){
        fivo[i] = fivo[i - 1] + fivo[i - 2];
    }
    return fivo;
}
var rasult = fivonacci(12);
console.log(rasult);

//fivinacci recarsive --

function fivonacci2(n2){
    if(n2 == 0){
        return 0;
    } else if (n2 == 1) {
        return 1;
    } else{
        return fivonacci2(n2 - 1) + fivonacci2(n2 - 2);
    }
}
var ff = fivonacci2(15);
console.log(ff);

//fivonacci seires recarsive _----

function fivonacci3(n3){
    if(n3 == 0){
        return [0];
    } else if(n3 == 1){
        return [0, 1];
    } else{
        var fivo3 = fivonacci3(n3 - 1);
        var nextElement = fivo3[n3 - 1] + fivo3[n3 - 2];
        fivo3.push(nextElement);
    }
    return fivo3;
}
var recarsiveResulatFivonacci = fivonacci3(20);
console.log(recarsiveResulatFivonacci);