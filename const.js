let Name = "miraz hosen";
if(Name.length < 12){
    Name = "miraz";
   
}
console.log(Name);


//leep yer ar use 





function leepYer2(yer){
    let yer2 = yer % 4;
    if(yer2 == 0){
       return true;
     } else{
        return false;
     }
}
let leepyerResult = leepYer2(2301) ;
console.log(leepyerResult);