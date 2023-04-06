const versiculos = [
  {texto: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.', referencia: 'João 3:16'},
  {texto: 'Porque todos pecaram e destituídos estão da glória de Deus;', referencia: 'Romanos 3:23'},
  {texto: 'E Jesus lhes disse: Eu sou o pão da vida; aquele que vem a mim não terá fome, e quem crê em mim nunca terá sede.', referencia: 'João 6:35'},
  // Adicione mais versículos aqui...
];

function exibirVersiculo() {
  // Sorteia um versículo aleatório
  const indice = Math.floor(Math.random() * versiculos.length);
  const versiculo = versiculos[indice];
  
  // Exibe o versículo na tela
  const textoVersiculo = document.getElementById('texto-versiculo');
  const referenciaVersiculo = document.getElementById('referencia-versiculo');
  textoVersiculo.textContent = versiculo.texto;
  referenciaVersiculo.textContent = versiculo.referencia;
}

// Define a periodicidade das notificações de acordo com a escolha do usuário
const opcaoPeriodicidade = localStorage.getItem('periodicidade');
//let intervalo = 60 * 60 * 1000; // 1 hora (padrão)
let intervalo = 5 * 1000; // 5 segundos só para testar o site xxxxxxxxxxxx
if (opcaoPeriodicidade === '3h') {
  intervalo = 3 * 60 * 60 * 1000; // 3 horas
} else if (opcaoPeriodicidade === '5h') {
  intervalo = 5 * 60 * 60 * 1000; // 5 horas
}

// Configura o Service Worker para exibir notificações
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => {
      setInterval(exibirVersiculo, intervalo);
    });
}


