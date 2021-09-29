//Ejercicio 1
function ejer1(min, max) { 
    let rndnum = Math.floor(Math.random() * (max - min + 1) + min)
    alert("El numero aleatorio es: " + rndnum);
  }


//Ejercicio 2
function ejer2() { 
    let rndnum = Math.floor(Math.random() * 100) + 1;
    for(let i=0; i < 11; i++){
      let num = prompt("Introduce un numero: ");
      if(rndnum == num){
        alert("Los numeros son iguales!!! Has ganado!!!!")
        break;
      }if(rndnum > num){
        alert("El numero generado aleatoriamente es mayor.")
      }else if(rndnum < num){
        alert("El numero generado aleatoriamente es menor")
      }
    } 
  }

  //Ejercicio 3
function ejer3(num1, num2){
  let arr = new Array(num1);
  
}

//Ejercicio 4
function ejer4(){
  let count = 0;
  for(let i = 1; i < 100; i++){
    for(let j = 1; j <= i; j++){
      if(i % j == 0){
        count++;
      }
    }
    if(count == 2){
      alert(i + " ");
    }
	count = 0;
}

}

//Ejercicio 5
function ejer5(dni){
  let num, letr, letra, exp_reg_dni

  exp_reg_dni = /^\d{8}[A-Z]$/;
 
  if(exp_reg_dni.test (dni) == true){
    num = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     num = num % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(num,num+1);
    if (letra!=letr.toUpperCase()) {
       alert('Dni incorrecto, la letra del DNI no se corresponde');
     }else{
       alert('Dni correcto');
     }
  }else{
     alert('Dni incorrecto, el formato no es válido');
   }
}

//Ejercicio 6
function ejer6(str){
  const strRevertido = str.split("").reverse().join("")
  return strRevertido === str;
}

function generarpalindromo(str){
  const strRevertido = str.split("").reverse().join("")

  if(strRevertido === str){
    alert(str + " es palindromo.")
  }else{
    alert(str + " no es palindromo")
  }
}


  
  
