var numeroAleatorio = 3;
var quantidade = 3;

while (quantidade > 0) {
  const numeroDigitado = parseInt(prompt("Digite um numero: "));
  if (numeroDigitado === numeroAleatorio) {
    alert("Vc acertou o numero!!!");
    quantidade = 0;
  } else {
    quantidade--;
    alert("Vc errou!");
    alert(`Voce tera mais ${quantidade} tentativas`);

    if (quantidade === 0) {
      alert("Infelizmente voce não tem mais tentativa");
    }
  }
}
