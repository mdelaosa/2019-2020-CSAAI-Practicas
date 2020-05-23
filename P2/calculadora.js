 console.log("Initializing calculator");

 display = document.getElementById("display");
 equal = document.getElementById("equal");
 del = document.getElementById("del");
 c = document.getElementById("c");
 sqrt = document.getElementById("sqrt");

 // Digitos y operadores
 let digit = document.getElementsByClassName("digit");
 let operator = document.getElementsByClassName("operator");

 //-- Estados de la calculadora
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2_INIT: 3,
  OP2: 4,
}

  let estado = ESTADO.INIT;

  //-- Digitos
  for(i=0; i<digit.length; i++){
    digit[i].onclick=(ev)=>{
     number(ev.target.value);
     console.log(`ESTADO ${estado}`);
    }
  }

  //-- Operadores
  for(i=0; i<operator.length; i++){
    operator[i].onclick=(ev)=>{
      operators(ev.target.value);
      console.log(`ESTADO ${estado}`);
    }
  }

  function number(num){
    //-- Segun el estado hacemos una cosa u otra
    if (estado == ESTADO.INIT) {
      display.innerHTML = num;
      estado = ESTADO.OP1;
    }else if (estado == ESTADO.OP1){
      display.innerHTML += num;
    } else if (estado == ESTADO.OPERATION) {
      display.innerHTML += num;
      estado = ESTADO.OP2_INIT;
    }else if (estado == ESTADO.OP2_INIT) {
      display.innerHTML +=  num;
      estado = ESTADO.OP2;
    }else if (estado == ESTADO.OP2){
      display.innerHTML += num;
    }
  }

  function operators(operat){
  if (estado != ESTADO.OPERATION) {
    display.innerHTML += operat;
    estado = ESTADO.OPERATION;
  }
}



 /*// Digitos
 for (i=0; i<digit.length; i++) {
  digit[i].onclick = (ev) => {
    if (display.innerHTML == "0"){
      display.innerHTML = ev.target.value;
    }else{
      display.innerHTML += ev.target.value;
    }
  }
}

 // Operadores
for (i=0; i<operator.length; i++){
  console.log('operador')
  operator[i].onclick = (ev) =>{
    if (display.innerHTML == "0"){
      display.innerHTML = ev.target.value;
    }else{
      display.innerHTML += ev.target.value;
    }
  }
}*/

  // Igual
  equal.onclick = () => {
    display.innerHTML = eval(display.innerHTML);
  }

  // Borrar todo
 c.onclick = () => {
   display.innerHTML = "";
 }

// Borrar lo ultimo añadido
 del.onclick = () => {
   if (display.innerHTML == "0"){
     display.innerHTML = "";
   }else{
     display.innerHTML = display.innerHTML.slice(0,-1);
   }
 }

 // Raiz
 sqrt.onclick = () => {
  display.innerHTML = Math.sqrt(display.innerHTML);
}
