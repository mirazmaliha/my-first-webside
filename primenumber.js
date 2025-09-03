function primeNumber(n){
    for(var i = 2; i <= n; i++){
        var n2 = n % i;
        if(n2 == 0){
         return 'your number is not prime number';
        }
       else {
        return 'your number is a prime number';
        }
    
}
}
var result = primeNumber(13);
console.log(result);