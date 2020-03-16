 console.log("Initializing calculator");

 display = document.getElementById("display");
 equal = document.getElementById("equal");
 del = document.getElementById("del");
 c = document.getElementById("c");
 sqrt = document.getElementById("sqrt");

 // Digitos y operadores
 let digit = document.getElementsByClassName("digit");
 let operator = document.getElementsByClassName("operator");

 // Para meter mas de un digito
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
}

  // Igual
  equal.onclick = () => {
    display.innerHTML = eval(display.innerHTML);
  }

  // Borrar todo
 c.onclick = () => {
   display.innerHTML = "0";
 }

// Borrar lo ultimo añadido
 del.onclick = () => {
   if (display.innerHTML == "0"){
     display.innerHTML = "0";
   }else{
     display.innerHTML = display.innerHTML.slice(0,-1);
   }
 }

 // Raiz
 sqrt.onclick = () => {
  display.innerHTML = Math.sqrt(display.innerHTML);
}
