var a = 1;
var b = 2;

if (a === 1){
    var a = 11; // the scope is global
    let b = 13; //the scope is local, inside the if block

    console.log(a); // 11
    console.log(b) // 13
}

console.log(a); //11
console.log(b); //2

