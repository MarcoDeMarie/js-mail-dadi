const user = Math.ceil(Math.random() * 6)
const computer = Math.ceil(Math.random() * 6)

console.log(user)
console.log(computer)

let esito;

if(user < computer){
  esito = 'hai perso'
}
else if(user > computer){
  esito = 'hai vinto'
}
else{
  esito = 'pari'
}

console.log(esito)




