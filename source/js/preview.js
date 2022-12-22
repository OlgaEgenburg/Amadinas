

const templateFragment = document.querySelector('#photo-preview').content;
const templateElement = templateFragment.querySelector('.success');
const listOfPicturesElement = document.querySelector('.pictures');
const button = document.querySelectorAll('.fialka__button');

// const openModal = () => {
//   const imageElement = templateElement.cloneNode(true);
//   imageElement.querySelector('.preview__photo').src = "img/ek-moryachka.png";
//   document.body.append(imageElement);

// };


const onChangeEffect = (evt) => {
  if (!evt.target.classList.contains('fialka')) {
    return;
  }
  const imageElement = templateElement.cloneNode(true);
  imageElement.querySelector('.preview__photo').src = "img/ek-moryachka.png";
  // currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  // imageAddEffectElement.className = '';
  // imageAddEffectElement.style.filter = `${currentEffect.style}`;
  // imageAddEffectElement.classList.add(`effects__preview--${currentEffect.name}`);
  document.body.append(imageElement);
};

for (var i = 0 ; i < button.length; i++) {
  button[i].addEventListener('click' , onChangeEffect);
}

