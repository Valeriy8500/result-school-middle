export interface CardInfo {
  iconPath: string;
  iconAlt: string;
  backgroundPath: string;
  audioPath: string;
  id: number;
}

export const cardsInfo: CardInfo[] = [
  {
    iconPath: "images/sun.svg",
    iconAlt: 'sun icon',
    backgroundPath: 'url(images/summer-bg.jpg)',
    audioPath: 'sounds/summer.mp3',
    id: 1
  },
  {
    iconPath: "images/cloud-rain.svg",
    iconAlt: 'rain icon',
    backgroundPath: 'url(images/rainy-bg.jpg)',
    audioPath: 'sounds/rain.mp3',
    id: 2
  },
  {
    iconPath: "images/cloud-snow.svg",
    iconAlt: 'snow icon',
    backgroundPath: 'url(images/winter-bg.jpg)',
    audioPath: 'sounds/winter.mp3',
    id: 3
  }
];