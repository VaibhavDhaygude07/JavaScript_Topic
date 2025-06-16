let a=5; //global scoping
let b=4; //global scoping
function calculator(){
   
    function add(a,b){
        let c=10 //local scoping
        return a+b+c;
    }
   
    console.log (add(a,b));
}
calculator(); 


