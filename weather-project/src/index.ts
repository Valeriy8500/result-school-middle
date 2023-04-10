import { cardsInfo } from './data';
import { CardInfo } from './data';
import './index.scss';

const page = document.querySelector('.page') as HTMLElement;
const controller = document.querySelector('.volume-slider') as HTMLInputElement;
const templateContainer = document.querySelector('.template-audio-card') as HTMLTemplateElement;
const audioCardTemplate = templateContainer!.content.querySelector('.audio-cards__container') as HTMLElement;
const listAudioCards = document.querySelector('.audio-cards') as HTMLElement;

let switchingFlag: number = 0;

function createAudioCard(item: CardInfo): HTMLElement {
  const cardElement = audioCardTemplate!.cloneNode(true) as HTMLElement;
  const audioCard = cardElement.querySelector('.audio-cards__card') as HTMLElement;
  const cardIcon = cardElement.querySelector('.audio-cards__icon') as HTMLImageElement;
  const audio = cardElement.querySelector('.audio-cards__audio') as HTMLAudioElement;
  const pause: string = 'images/pause.svg';

  audio.id = String(item.id);
  audio.src = item.audioPath;
  cardIcon.src = item.iconPath;
  cardIcon.setAttribute('alt', item.iconAlt);
  audioCard.style.backgroundImage = item.backgroundPath;

  function playAudio(): void {
    controller.addEventListener("input", () => {
      const controllerValue = Number(controller.value);
      audio.volume = controllerValue;
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
      const currentAudio = document.getElementById(`${switchingFlag}`) as HTMLAudioElement;
      const allIcons: NodeListOf<HTMLImageElement> = document.querySelectorAll('.audio-cards__icon');
      if (allIcons.length) {
        allIcons.forEach((item, idx) => {
          if (switchingFlag - 1 === idx) {
            item.src = cardsInfo[idx].iconPath;
          }
        });
      }
      cardIcon.src = pause;
      currentAudio.pause()
      audio.play();
      switchingFlag = item.id;
    }
    page.style.backgroundImage = item.backgroundPath;
  }

  audioCard.addEventListener('click', playAudio);
  return cardElement;
}

cardsInfo.forEach((item: CardInfo) => {
  listAudioCards.append(createAudioCard(item));
});




