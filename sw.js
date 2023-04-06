const verses = [
  'Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna. - João 3:16',
  'O Senhor é o meu pastor, nada me faltará. - Salmo 23:1',
  'Deem graças ao Senhor, porque ele é bom; o seu amor dura para sempre. - Salmo 136:1',
  'Jesus lhe respondeu: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim. - João 14:6'
];

function scheduleNotification() {
  const title = 'Versículo do dia';
  const options = {
    body: verses[Math.floor(Math.random() * verses.length)],
    icon: '/path/to/icon.png',
    badge: '/path/to/badge.png'
  };
  self.registration.showNotification(title, options);
  setTimeout(scheduleNotification, 3 * 60 * 60 * 1000); // 3 horas
}

self.addEventListener('push', function(event) {
  console.log('Push event received:', event);
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/path/to/icon.png',
      badge: '/path/to/badge.png'
    };
    event.waitUntil(self.registration.showNotification('Título da notificação', options));
  } else {
    console.log('Push event received, but no data was found');
  }
});

self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
  scheduleNotification();
});
