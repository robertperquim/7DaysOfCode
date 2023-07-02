let area = prompt(
  "Voce quer seguir para área de 'Front-End' ou seguir para a área de 'Back-End'. Digite o nome da vaga:"
);

let linguagem = "";

while (area != "Front-End" && area != "Back-En") {
  area = prompt("Area invalida. Utilize 'Front-End' ou 'Back-End' ");
}

if (area === "Front-End") {
  linguagem = prompt("Voce quer aprender React ou aprender Vue.");
} else {
  linguagem = prompt("Voce quer aprender C# ou aprender Java.");
}

let carreira = parseInt(
  prompt(
    "Voce quer seguir se especializando na área escolhida use 1 ou seguir se desenvolvendo para se tornar Fullstack use 2"
  )
);

while (carreira != 1 && carreira != 2) {
  carreira = prompt("Opcao incorreta utilize apenas 1 ou 2 ");
}

if (carreira === 1) {
  alert(`Parabens constinue se especializando em ${linguagem}!!`);
} else {
  alert(
    `Parabens constinue se especializando para ser um desenvolvedor FullStack!!`
  );
}

let msg = prompt(
  "Tem mais alguma tecnologia que voce deseja aprender? Digite 'ok' se sim"
);

while (msg === "ok") {
  let novaTecnologia = prompt("Qual?");

  alert(`${novaTecnologia} é uma tecnologia muito boa`);
  msg = prompt(
    "Deseja aprender uma nova tecnologia? Digite 'ok' para sim e 'n' para não"
  );
}
