// Checks user language
var userLanguage = navigator.language || navigator.userLanguage;

// load translations
var translations;
if (userLanguage === 'pt' || userLanguage === 'pt-BR') {
  translations = {
    '0': 'Site do Vitor',
    '1': 'Bem-vindo ao meu site!',
    '2': 'Aqui você encontrará a solução ideal para seus problemas online',
    '3': '• Lojas online;',
    '4': '• Blogs;',
    '5': '• Notícias;',
    '6': '• Etc.',
    '7': 'Desenvolvo qualquer tipo de site, desde o design até a hospedagem',
    '8': 'Contate agora!',
    '9': 'Vamos começar seu novo site hoje',
    "10": "Meu nome é Vitor de Oliveira, desenvolvedor web"
  };
} else {
  translations = {
    '0': "Vitor's Site",
    '1': 'Welcome to my website!',
    '2': 'Here, you will find the ideal solution for your online needs',
    '3': '• E-Commerces;',
    '4': '• Blogs;',
    '5': '• News;',
    '6': '• Etc.',
    '7': 'I develop any type of website, from design to deploy',
    '8': 'Contact now!',
    '9': "Let's start your new website today",
    '10': "My name is Vitor Oliveira, web developer"
  };
}

// translate the text
function translate() {
  var elements = document.getElementsByClassName('translate');
  for (var i = 0; i < elements.length; i++) {
    var key = elements[i].getAttribute('data-key');
    if (translations.hasOwnProperty(key)) {
      elements[i].innerText = translations[key];
    }
  }
}

window.onload = translate;
