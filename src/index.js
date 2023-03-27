import cardsInfo from './data';
import './index.scss';

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



