const quotes = [  {    quote: "Bem-aventurados os limpos de coração, porque verão a Deus.",    author: "Mateus 5:8"  },
                {    quote: "Não tenhas medo, crê somente.",    author: "Marcos 5:36"  },
                {    quote: "Eu sou o pão da vida; aquele que vem a mim não terá fome.",    author: "João 6:35"  },
                {    quote: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",    author: "Mateus 11:28"  },
                {    quote: "O Senhor é o meu pastor, nada me faltará.",    author: "Salmos 23:1"  },
                {    quote: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",    author: "Salmos 46:1"  },
                {    quote: "A paz de Deus, que excede todo o entendimento, guardará o vosso coração e a vossa mente.",    author: "Filipenses 4:7"  },
                {    quote: "O amor é paciente, é benigno; o amor não arde em ciúmes, não se ufana, não se ensoberbece.",    author: "1 Coríntios 13:4"  },
                {    quote: "Em tudo somos atribulados, porém não angustiados; perplexos, porém não desanimados; perseguidos, porém não desamparados; abatidos, porém não destruídos.",    author: "2 Coríntios 4:8-9"  },
                {    quote: "Porque, onde estiver o vosso tesouro, ali estará também o vosso coração.",    author: "Mateus 6:21"  },
                 {   quote: "Sede, pois, imitadores de Deus, como filhos amados;",
    author: "Efésios 5:1"
  },
  {
    quote: "Não se turbe o vosso coração; credes em Deus, crede também em mim.",
    author: "João 14:1"
  },
  {
    quote: "E conhecereis a verdade, e a verdade vos libertará.",
    author: "João 8:32"
  },
  {
    quote: "Bem-aventurados os mansos, porque eles herdarão a terra.",
    author: "Mateus 5:5"
  },
  {
    quote: "O meu mandamento é este: Que vos ameis uns aos outros, assim como eu vos amei.",
    author: "João 15:12"
  },
  {
    quote: "Mas aquele que perseverar até ao fim, esse será salvo.",
    author: "Mateus 24:13"
  },
  {
    quote: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
    author: "Salmos 46:1"
  },
  {
    quote: "Porque Deus não nos tem dado o espírito de temor, mas de fortaleza, e de amor, e de moderação.",
    author: "2 Timóteo 1:7"
  }  ];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

function newQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.innerHTML = randomQuote.quote;
  authorEl.innerHTML = `- ${randomQuote.author}`;
}

newQuote();

setInterval(newQuote, 15000);
