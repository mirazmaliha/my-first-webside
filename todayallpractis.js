function jogKora(num){
    var sum = 0;
    for(var i = 0; i < num.length; i++){
        var all = num[i];
         sum = all + sum;
    }
    return sum;
}
var allJogResult = jogKora([45, 10, 20, 30]);
console.log(allJogResult);

// same elementOut ------

var namesId = [1, 2, 3, 4, 5, 1, 10, 3, 4, 5];
    var goodName = [];
    for(var i = 0; i < namesId.length; i++){
        var element = namesId[i];
        var index = goodName.indexOf(element);
        if(index == -1){
            goodName.push(element);
        }
    }
    console.log(goodName);
// word count -------
var sentence = "amar sonar              bangla ami tomay valobasi";
var count = "";
for(var i = 0; i < sentence.length; i++){
    var char = sentence[i];
    if(char == " " && sentence[i - 1] != " "){
        count++;
    }
}
console.log(count);

// revarce ultano --------------

var sentence2 = "amar sonar bangla ami tomay valobasi";
var reverce = "";
for(var i = 0; i < sentence2.length; i++){
    var char = sentence2[i];
    reverce = char + reverce;
}
console.log(reverce);