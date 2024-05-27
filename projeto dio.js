const vitorias = parseInt(25);
const derrotas = parseInt(5) ;
const saldoFinal = vitorias-derrotas

//=5

function quantidadeGeral (vitorias,derrotas ){
    let resultado = vitorias -derrotas
 
 if (resultado < 0 ){
   return("Derrotado") }
else if (vitorias >=0  && vitorias <10){
  return"Ferro";
}
else if(vitorias >= 10 && vitorias <=20){
  return "Bronze"; 
}
else if (vitorias >= 21 && vitorias<50){
  return "Prata";
}
else if (vitorias >= 51 && vitorias< 80){
  return "Ouro";
}
else if (vitorias >= 81 && vitorias>90){
  return "Diamante";
}
else if (vitorias >= 91 && vitorias < 100){
  return "Diamante";
}
else "lendario"}

//console.log (`O Herói tem de saldo de ${quantidadeGeral} está no nível de ${resultado}`)
let nivel = quantidadeGeral(vitorias, derrotas);
console.log(`O Herói tem um saldo de ${saldoFinal} e está no nível de ${nivel}`);