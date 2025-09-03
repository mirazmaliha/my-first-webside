var a = 12;
var b = 14;
var temponary = a ;
a = b;
b = temponary;
//console.log("after swap :", "a =", a, "b =", b);

var x = 10;
var y = 20;
x = x + y;
y = x - y;
x = x - y;
//console.log("after swap :", "x =", x, "y =", y);

var p = 14;
var q = 18;
[p, q] = [q, p];
console.log("after swap :", "p =", p, "q =", q);

// math.random ar kaj mkorte hobe ----



// k boro compeare ============

var buisness = 200;
var chakri = 100;
var cibil = 400;
if(buisness > chakri){
    if(buisness > cibil){
        console.log("buisness is bigger");
    } else{
        console.log("cibil is bigger");
    }
} else{
    if(chakri > cibil){
        console.log("chakri is bigger");
    } else{
        console.log("cibil is bigger");
    }
}
// compeare 2 -----------

var buisness2 = 400;
var chakri2 = 200;
var cibil2 = 100;
var result = Math.max(buisness2, chakri2, cibil2);
console.log(result);

// compeare 3 ---------

var marks = [20, 40, 50, 10, 22, 28, 90, 9, 7];
var max = marks[0];
for(var i = 0; i <= marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("high number :", max);