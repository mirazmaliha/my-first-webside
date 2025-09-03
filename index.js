// name change ---------

var myName = "miraz Khondokar";
if(myName.length > 4){
    myName = "Miraz";
}
console.log("name change :=", myName);

// inch converter -----------

function inchConvert(n){
    var inch = n / 12;
    return inch;
}
var inchConvertResult = inchConvert(36);
console.log("inch convert : =", inchConvertResult);

// leap yer ---------

function leapYer(n){
    var yer = n % 4;
    if(yer == 0){
        return "Your yer is a leap yer";
    } else{
        return "Your yer is'nt a leap yer";
    }
}
var leapYerResult = leapYer(2000);
console.log("leap yer :=", leapYerResult);

// factorial for lup --------

function factorial1(n){
    var factorial1 = 1;
    for(var i = 1; i < n; i++){
        factorial1 = factorial1 * i;
    }
    return factorial1;
}
var factorial1Result = factorial1(10);
console.log("factorial1 :=", factorial1Result);

// factorial while lup --------

function factorial2(n){
    var i = 1;
    var factorial2 = 1;
    while (i < n) {
       factorial2 = factorial2 * i;
       i++;
    }
    return factorial2;
}
var factorial2Result = factorial2(12);
console.log("factorial2 :=", factorial2Result);

// factorial recarsive -----

function factorial3(n){
    if(n == 0){
        return 1;
    } else{
        return n * factorial3(n - 1);
    }
}
var factorial3Result = factorial3(14);
console.log("factorial3 :=", factorial3Result);

// fibonacci for lup ---------

function fiboNacci1(n){
    var fibo = [0, 1];
for(var i = 2; i < n; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
return fibo;
}
var fiboNacci1Result = fiboNacci1(10);
console.log("fibo :=", fiboNacci1Result);

// fiboNacci two recarsive one -----------

function fiboNacci2(n){
    if(n == 0){
        return 0;
    } else if(n == 1){
        return 1;
    } else{
        return fiboNacci2(n - 1) + fiboNacci2(n - 2);
    }
}
var fiboNacci2Result = fiboNacci2(12);
console.log("fibo 2 :=", fiboNacci2Result);

// fiboNacci three recarsive two ------

function fiboNacci3(n){
    if(n == 0){
        return [0];
    } else if(n == 1){
        return [0, 1];
    } else{
        var fibo = fiboNacci3(n - 1);
        var nextelement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextelement);
        return fibo;
    }
}
var fiboNacci3Result = fiboNacci3(9);
console.log("fibo 3 :=", fiboNacci3Result);

// swap -------

var a = 10;
var b = 20;
var temponary = a;
a = b;
b = temponary;
console.log("after swap one :=", "a =", a, "b =", b);

var x = 30;
var y = 40;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap two :=", "x =", x, "y =", y);

var p = 50;
var q = 60;
[p, q] = [q, p];
console.log("after swap three :=", "p =", p, "q =", q);

// compeare --------

var buisness = 100;
var chakri = 800;
var civil = 6000;
if(buisness > chakri){
    if(buisness > civil){
        console.log("buisness is the bigger");
    } else{
        console.log("civil is the bigger");
    }
} else{
    if(chakri > civil){
        console.log("chakri is the bigger");
    }else{
        console.log("civil is the bigger");
    }
}

// arraysome ----------

function jog(n){
    var sum = 0;
    for(var i = 0; i < n.length; i++){
        var element = n[i];
        sum = sum + element;
    }
    return sum;
}
//var marks = ;
var jogResult = jog([20, 20, 40, 80, 100, 20, 5]);
console.log("jog :=", jogResult);

// same element uot of array -----------

var studentId = [1, 5, 7, 3, 1, 5, 6, 6];
var uniqId = [];
for(var i = 0; i < studentId.length; i++){
    var element = studentId[i];
    var index = uniqId.indexOf(element);
    if(index == -1){
        uniqId.push(element);
    }
}
console.log("uniq Id =", uniqId);

// word count -------

var word = "amar sonar bangla ami    tomay valobasi";
var count = 0;
for(var i = 0; i < word.length; i++){
    var element = word[i];
    if(element == " " && word[i - 1] != " " ){
        count++;
    }
}
console.log("word count =", count);

// reverce ultano ------------

var song = "amar sonar bangla ami tomay valobnasi";
var song2 = "";
for(var i = 0; i < song.length; i++){
    var char = song[i];
    song2 = char + song2;
}
console.log("reverce =", song2);

// end