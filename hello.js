
var maynassongkha = -20;
maynassongkha = Math.abs(maynassongkha);
console.log(maynassongkha);


var dosomiksongkha1 = 5.545;
dosomiksongkha1 = Math.round(dosomiksongkha1);
console.log(dosomiksongkha1);


var dosomiksongkha2 = 5.545;
dosomiksongkha2 = Math.ceil(dosomiksongkha2);
console.log(dosomiksongkha2);


var dosomiksongkha3 = 5.9999545;
dosomiksongkha3 = Math.floor(dosomiksongkha3);
console.log(dosomiksongkha3);


var dosomiksongkha4 = Math.random()*100;
dosomiksongkha4 = Math.ceil(dosomiksongkha4);
console.log(dosomiksongkha4);

//if else ar use


var ifelse = 20;
if(ifelse <= 10){
    console.log('right');
}
 else if (ifelse > 20)   {
      console.log("Miraz");
 }
 else if (ifelse != 12)  {
       console.log("maliha");
 }
 else{
    console.log('mittha');
}

//aary ar use 


var friendsNumber = [20, 40, 50, 60];
var sonaliAge = friendsNumber[2];
console.log(sonaliAge);
friendsNumber[2] = 70;
console.log(friendsNumber);
var all = friendsNumber.indexOf(70);
console.log(all);
friendsNumber.push(50);
console.log(friendsNumber);
friendsNumber.pop();
console.log(friendsNumber);
friendsNumber.shift(20);
console.log(friendsNumber);
friendsNumber.unshift(100);
console.log(friendsNumber);
console.log(friendsNumber.length);


//arry ke part part korar jonno


var friendsName = ["Miraz", "Maliha", "Amader picci", "Baba", "ma"];
var part = friendsName.slice(1, 4)
console.log(part);



// while lup ar use 


var whilelup = 10;
while(whilelup <= 15){
    console.log(whilelup);
    whilelup++;
}


//for lup ar use

var nums = [20, 40, 60, 80];
for(var i = 0; i<nums.length; i++){
    var element = nums[i];
    console.log(element);
}


//switch ar use


num = 100;
switch(num){
    case 10:
        console.log("tor biye hobe na");
        break;
        case 100:
            console.log("tor biye hobe");
            break;
            default:
            console.log("i dont know");
}
// function ar use 


function add(num1, num2){
    var result = num1  + num2;
    return result;
}
var sum = add(15, 20);
console.log(sum);

// object ar use


var student = { id:121, phone:01777, city:"Dhaka" }
var student2 = { id:123, phone:0177755, city:"bogura" }
var phonePropName = "city";
var city123 = student2["city"];
var phone1 = student.phone;
console.log(phone1);
var idno2 = student["id"];
console.log(idno2);
console.log(city123);



//upadte object alimet
student.phone = 1010110;

student["id"] = 01010101000;
console.log(student);


function inchToFeet(inch){
    var inchResult = inch / 12;
    return inchResult;
}
var dadiFeet = inchToFeet(506);
var dadiFeetceil = Math.ceil(dadiFeet);
console.log(dadiFeetceil);
var dadiFeet2 = inchToFeet(256);
var dadiFeetceil2 = Math.ceil(dadiFeet2);
console.log(dadiFeetceil2);


function convertInch(convert){
    var convertResult = convert / 12;
    return convertResult;
}
var convertAllResult = convertInch(36);
console.log(convertAllResult);


var amarBouName = "Maliha akther";
if(amarBouName.length < 14){
    amarBouName = "Maliha";
}
console.log(amarBouName);
function leepYer(yer){
    let yer2 = yer % 4;
    if(yer2 == 0){
        return true;
    } else{
        return false;
    }
}
const leepYerResult = leepYer(2001);
console.log(leepYerResult);