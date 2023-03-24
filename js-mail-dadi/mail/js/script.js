const listaMails = [
  'marco@gmail.com',
  'matteo@gmail.com',
  'luca@gmail.com',
  'giovanni@gmail.com',
]

const nuovaMail = prompt('inserisci mail')
let esito = '';
let mailTrovata = false;

for(let i = 0; i < listaMails.length; i++){
  const clistaMails = listaMails[i];

  if(clistaMails === nuovaMail){
    mailTrovata = true;
  }
}

if(mailTrovata){
  esito = 'Mail trovata'
}
else{
  esito = 'Mail non trovata'
}
console.log(esito)
