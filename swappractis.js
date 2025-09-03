var aa = 10;
var bb = 20;
//var temponary = a;
//a = b;
//b = temponary;
aa = aa + bb;
bb = aa - bb;
aa = aa - bb;
console.log("after swap :", "aa =", aa, "bb =", bb);

var p = 30;
var q = 40;
[p, q] = [q, p];
console.log("after swap :", "p =", p, "q =", q);

var buisness = 1000;
var minister = 800;
var chakri = 7000;
if(buisness > minister){
    if(buisness > chakri){
        console.log("buiesnss is the bogger");
    }else{
        console.log("chakri is the bogger");
    }
}else{
    if(minister > chakri){
        console.log("minister is the bigger");
    }else{
        console.log("chakri is the bigger");
    }
}

var marks = [2000, 10, 40, 88, 99, 40, 22, 100, 700];
var max = marks[0];
for(var i = 0; i <= marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log(max);