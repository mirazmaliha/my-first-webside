function animalCalclutar(n){
var animal = 0;
if(n <= 10){
    animal = n * 50;
} else if(n <= 20){
    var firstPart = 10 * 50;
    var remainig = n - 10;
    var secondPart = remainig * 100;
    animal = firstPart + secondPart;
}else{
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remainig = n - 20;
    var thirdPart = remainig * 300;
    animal = firstPart + secondPart +thirdPart;
}
return animal;
}
var result = animalCalclutar(45);
console.log(result);