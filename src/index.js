import cardsInfo from './data';
import './index.scss';

const page = document.querySelector('.page');
const audioCardTemplate = document.querySelector('.template-audio-card').content.querySelector('.audio-cards__container');
const listAudioCards = document.querySelector('.audio-cards');

let switchingFlag = 0;

function createAudioCard(item) {
  const cardElement = audioCardTemplate.cloneNode(true);
  const audioCard = cardElement.querySelector('.audio-cards__card');
  const cardIcon = cardElement.querySelector('.audio-cards__icon');
  const audio = cardElement.querySelector('.audio-cards__audio');

  audio.src = item.audioPath;
  audio.id = item.id;
  cardIcon.src = item.iconPath;
  cardIcon.setAttribute('alt', item.iconAlt);
  audioCard.style.backgroundImage = item.backgroundPath;
  console.log('audio: ', audio.loop);

  function playAudio() {
    if (switchingFlag === 0) {
      audio.play();
      switchingFlag = item.id;
    } else if (switchingFlag === item.id) {
      !audio.paused ? audio.pause() : audio.play();
      switchingFlag = item.id;
    } else {
      const currentAudio = document.getElementById(`${switchingFlag}`);
      currentAudio.pause();
      audio.play();
      switchingFlag = item.id;
    }
    page.style.backgroundImage = item.backgroundPath;
  };

  audioCard.addEventListener('click', playAudio);
  return cardElement;
};

cardsInfo.forEach((item) => {
  listAudioCards.append(createAudioCard(item));
});



