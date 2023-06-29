const nome = prompt("Qual o seu nome");
const idade = prompt("Qual a sua idade?");
const linguagem = prompt("Qual linguagem vc estuda?");

alert(`Ola ${nome}. Voce tem ${idade} anos e esta aprendendo ${linguagem}`);

const opcao = parseInt(
  prompt(
    `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO`
  )
);

if (opcao === 1) {
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else {
  if (opcao === 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
  } else {
    alert("Opção invalida!");
  }
}
