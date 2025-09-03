function reverceString(sentence){
    var reverce = "";
    for(var i = 0; i < sentence.length; i++){
        var char = sentence[i];
        reverce = char + reverce;
    }
    return reverce;
}
var result = reverceString("amar sonar bangla ami tomay");
console.log(result);