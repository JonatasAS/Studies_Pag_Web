
// Função se o valor não e um número
export function notNumber(value){
  return isNaN(value) || value ==""
}


// Logica da formula do IMC
export function calculateIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

