import cardsInfo from './data';
import './index.scss';

const page = document.querySelector('.page');
const controller = document.querySelector('.volume-slider');
const audioCardTemplate = document.querySelector('.template-audio-card').content.querySelector('.audio-cards__container');
const listAudioCards = document.querySelector('.audio-cards');

let switchingFlag = 0;

function createAudioCard(item) {
  const cardElement = audioCardTemplate.cloneNode(true);
  const audioCard = cardElement.querySelector('.audio-cards__card');
  const cardIcon = cardElement.querySelector('.audio-cards__icon');
  const audio = cardElement.querySelector('.audio-cards__audio');
  const pause = 'images/pause.svg';

  audio.src = item.audioPath;
  audio.id = item.id;
  cardIcon.src = item.iconPath;
  cardIcon.setAttribute('alt', item.iconAlt);
  audioCard.style.backgroundImage = item.backgroundPath;

  function playAudio() {
    controller.addEventListener("input", () => {
      audio.volume = controller.value;
    });

    if (switchingFlag === 0) {
      audio.play();
      cardIcon.src = pause;
      switchingFlag = item.id;
    } else if (switchingFlag === item.id) {
      if (!audio.paused) {
        audio.pause();
        cardIcon.src = item.iconPath;
      } else {
        audio.play();
        cardIcon.src = pause;
      }
      switchingFlag = item.id;
    } else {
      const currentAudio = document.getElementById(`${switchingFlag}`);
      document.querySelectorAll('.audio-cards__icon')
        .forEach((i, idx) => {
          if (switchingFlag - 1 === idx) {
            i.src = cardsInfo[idx].iconPath;
          }
        });
      cardIcon.src = pause;
      currentAudio.pause();
      audio.play();
      switchingFlag = item.id;
    }
    page.style.backgroundImage = item.backgroundPath;
  }

  audioCard.addEventListener('click', playAudio);
  return cardElement;
}

cardsInfo.forEach((item) => {
  listAudioCards.append(createAudioCard(item));
});


