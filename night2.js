// inch convert --------
function inchConvert(n){
    var inch = n / 12;
    return inch;
}
var inchResult = inchConvert(36);
console.log(inchResult);

// leap yer -------
function leapYer(n){
    var yer = n % 4;
    if(yer == 0){
        return "your yer is a leap yer";
    }else{
        return "Your yer is'nt a leap yer";
    }
}
var leapYerResult = leapYer(2000);
console.log(leapYerResult);

// factorial for lup ------

function factorial1(n){
    var factorial1 = 1;
    for(var i = 1; i < n; i++){
        factorial1 = factorial1 * i;
       
    }
    return factorial1;
}
var factorial1Result = factorial1(12);
console.log(factorial1Result);

// factorial while lup ----------

function factorial2(n){
    var i = 1;
    var factorial2 = 1;
    while(i < n){
        factorial2 = factorial2 * i;
        i++;
    }
    return factorial2;
}
var factorial2Result = factorial2(10);
console.log(factorial2Result);

// factorial recarsive -----

function factorial3(n){
    if(n == 0){return 1}else{return n * factorial3(n - 1)}
} var factorial3result = factorial3(6); console.log(factorial3result);

// fibonacci for lup -----------

function fiboNacci1(n){
    var fibo = [0, 1];
    for(var i = 2; i < n; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var fibonacci1Result = fiboNacci1(12);
console.log(fibonacci1Result);

// fibonacci recarsive one ---------

function fiboNacci2(n){
    if(n == 0){
        return 0;
    } else if(n == 1){
        return 1;
    } else{
        return fiboNacci2(n - 1) + fiboNacci2(n - 2);
    }
}
var fibonacci2result = fiboNacci2(12);
console.log(fibonacci2result);

// fibonacci recarsive two -----------

function fiboNacci3(n){
    if(n == 0){
        return [0];
    } else if(n == 1){
        return [0, 1];
    } else{
        var fibo = fiboNacci3(n - 1);
        var nextElement = fibo[n - 1] + fibo[n -2];
        fibo.push(nextElement);
        return fibo;
    }
}
var fibonacci3Result = fiboNacci3(25);
console.log(fibonacci3Result);

// swap one -----

var a = 10;
var b = 20;
var temponary = a;
a = b;
b = temponary;
console.log("after swap :", "a =", a, "b =", b);

// swap two -----

var x = 30;
var y = 40;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap :", "x =", x, "y =", y);

// swap three -------

var p = 50;
var q = 60;
[p, q] = [q, p];
console.log("after swap :", "p =", p, "q =", q);

// for lup ar maddhome array ar sokol element jog kora

function jog(n){
var allMarks =0;
for(var i = 0; i < n.length; i++){
    var element = n[i];
    allMarks = allMarks + element;
}
return allMarks;
}
var jogAllResult = jog([10, 40, 20, 30]);
console.log(jogAllResult);

// same array element out ---------

var studentId = [1, 3, 5, 7, 3, 2, 7];
var uniq = [];
for(var i = 0; i < studentId.length; i++){
    var element = studentId[i];
    var index = uniq.indexOf(element);
    if(index == -1){
        uniq.push(element);
    }
}
console.log(uniq);

// word count --------

var word = "amar sonar       bangla ami tomay valobasi";
var count =0;
for(var i = 0; i < word.length; i++){
    var all =  word[i];
    if(all == " " && word[i - 1] != " "){
        count++;
    }
}
console.log(count);

// reverse use mane ultano ---------

var song = "amar sonar bangla ami tomay valobasi";
var song2 = "";
for(var i = 0; i < song.length; i++){
    var char = song[i];
    song2 = char + song2;
}
console.log(song2);