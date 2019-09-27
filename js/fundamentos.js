// funciones
function greeting(name) {
  return `Hello ${name} !`;
}
alert(greeting("Carlos")); 

// Arrow Functions

/*
let greeting1 = (name) => `Hello ${name} !`
greeting1("Pedro");
alert(greeting1("Pedro")); 
*/

// Scope de las variables


var name = "Carlos"; 
function greeting1() {
  return `Hello ${name} !`;
}
greeting1();



/* 
var name = "Carlos"; 
function greeting(name) {
  return `Hello ${name} !`;
}
greeting("NivelPro"); 
*/  


/* 
var name = "Carlos"; 
function greeting() {
var name = "Joel"; 
  return `Hello ${name} !`;
}
greeting(); 
*/  


/* 
function greeting() {
var item; 
for (item = 0; item < 5; item++) {
      console.log(`Item ${item} !`);
  }
return `Value: ${item}`;
}
greeting(); 
*/
