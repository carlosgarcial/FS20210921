//Ejercicio 1
function ejer1(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = ejer1(1, 6)
  console.log(rndInt)