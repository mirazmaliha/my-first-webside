
function numbers(num){
       var sum = 0;
    for(var i = 0; i < num.length; i++){
       var element = num[i];
       sum = sum + element;
    }
    return sum;
}
var numberss = [10, 20, 11, 19, 99, 22,100];
var result = numbers(numberss);
console.log(result);