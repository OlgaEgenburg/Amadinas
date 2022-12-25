const STANDARTS = [
  {
  url: "img/dumplin.jpg",
  alt: `Dumplin.`,
  title: `Dumplin`,
  text: `Фиалка с воздушными цветками-помпонами прекрасно переносит засуху и дает пышное цветение.`,
  price: 70,
},
{
  url: 'img/ek-oduvan.jpg',
  alt: `ЕК-Одуванчики.`,
  title: `ЕК-Одуванчики`,
  text: `Крупные, махровые, ярко-жёлтые с белым цветы, края лепестков слегка тронуты розовым. Цветки пушистые и жёлтенькие, как цветущие одуванчики. Хорошая розетка из ярко-зелёных, зубчатых, слегка волнистых листьев.
  Не прост в выращивании.`,
  price: 70,
},
  {url: 'img/lamborghini.jpg',
  alt: `ЕЛ-Lamborgini Veneno.`,
  title: `ЕЛ-Lamborgini Veneno`,
  text: `Крупная розовая "оса" с затемнением в центре цветка. Красивая пестролистная розетка.`,
  price: 70,
},
{
  url: 'img/spirovchanka.jpg',
  alt: `Спировчанка.`,
  title: `Спировчанка`,
  text: `Крупные бледно розовые махровые цветы с широкой малиновой каймой. Розетка большая. Листья зелёные.`,
  price: 70,
},
{
  url: 'img/dn-magic.jpg',
  alt: `Dn-Магия неба.`,
  title: `Dn-Магия неба`,
  text: `Очень крупные простые белые звезды с синим центром и розовыми горошками по синемуфону. Простые зеленые листья..`,
  price: 70,
}
];

console.log(STANDARTS);

const templateFragment = document.querySelector('#photo-preview').content;
const templateElement = templateFragment.querySelector('.fialka');
const listOfPicturesElement = document.querySelector('.list');
/**
 *
 * @param {Array} usersPhotos
 */
const renderListOfPictures = (usersPhotos) => {
  const picturesFragment = document.createDocumentFragment();

  usersPhotos.forEach (({url, alt, title, text, price}) => {
    const imageElement = templateElement.cloneNode(true);
    imageElement.querySelector('.fialka__photo').src = url;
    imageElement.querySelector('.fialka__photo').alt = alt;
    imageElement.querySelector('.fialka__title').textContent = title;
    imageElement.querySelector('.fialka__text').textContent = text;
    imageElement.querySelector('.fialka__price').textContent = price;
    picturesFragment.appendChild(imageElement);
  });
  listOfPicturesElement.appendChild(picturesFragment);
};

renderListOfPictures(STANDARTS);

