const quotes = [  {    quote: "Não tenhas medo, crê somente.",    author: "Marcos 5:36"  },  {    quote: "Eu sou o pão da vida; aquele que vem a mim não terá fome.",    author: "João 6:35"  },  {    quote: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",    author: "Mateus 11:28"  },  {    quote: "O Senhor é o meu pastor, nada me faltará.",    author: "Salmos 23:1"  },  {    quote: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",    author: "Salmos 46:1"  },  {    quote: "A paz de Deus, que excede todo o entendimento, guardará o vosso coração e a vossa mente.",    author: "Filipenses 4:7"  },  {    quote: "O amor é paciente, é benigno; o amor não arde em ciúmes, não se ufana, não se ensoberbece.",    author: "1 Coríntios 13:4"  },  {    quote: "Bem-aventurados os limpos de coração, porque verão a Deus.",    author: "Mateus 5:8"  },  {    quote: "Em tudo somos atribulados, porém não angustiados; perplexos, porém não desanimados; perseguidos, porém não desamparados; abatidos, porém não destruídos.",    author: "2 Coríntios 4:8-9"  },  {    quote: "Porque, onde estiver o vosso tesouro, ali estará também o vosso coração.",    author: "Mateus 6:21"  }];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
let index = 0;

function displayQuote() {
  quote.textContent = quotes[index].quote;
  author.textContent = quotes[index].author;
  index++;
  if (index === quotes.length) {
    index = 0;
  }
}

displayQuote();
setInterval(displayQuote, 4000); 
