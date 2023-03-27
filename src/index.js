import './index.scss';

const cardsInfo = [
  {
    iconPath: "images/sun.svg",
    iconAlt: 'sun icon',
    backgroundPath: 'url(images/summer-bg.jpg)'
  },
  {
    iconPath: "images/cloud-rain.svg",
    iconAlt: 'rain icon',
    backgroundPath: 'url(images/rainy-bg.jpg)'
  },
  {
    iconPath: "images/cloud-snow.svg",
    iconAlt: 'snow icon',
    backgroundPath: 'url(images/winter-bg.jpg)'
  }
];

const audioCardTemplate = document.querySelector('.template-audio-card').content.querySelector('.audio-cards__container');
const listAudioCards = document.querySelector('.audio-cards');

function createAudioCard(item) {
  const cardElement = audioCardTemplate.cloneNode(true);
  const audioCard = cardElement.querySelector('.audio-cards__card');
  const cardIcon = cardElement.querySelector('.audio-cards__icon');

  audioCard.addEventListener('click', () => {
    console.log('click');
  });

  cardIcon.src = item.iconPath;
  cardIcon.setAttribute('alt', item.iconAlt);
  audioCard.style.backgroundImage = item.backgroundPath;

  return cardElement;
};

cardsInfo.forEach((item) => {
  listAudioCards.append(createAudioCard(item));
});



