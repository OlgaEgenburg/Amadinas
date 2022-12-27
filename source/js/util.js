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

export {renderListOfPictures};
