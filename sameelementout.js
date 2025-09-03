var names = [1, 10, 5, 2, 1, 5, 10];
var freshName =[];
for(var i = 0; i < names.length; i++){
    var element = names[i];
    var index = freshName.indexOf(element);
    if(index == -1){
        freshName.push(element);
    }
}
console.log(freshName)