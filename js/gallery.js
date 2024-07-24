import { generateThumbNails } from "./thumbnail.js";
import { showBigPicture } from "./big-picture.js";

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbNail = evt.target.closeset('[data-thumbnail-id]');
    if (!thumbNail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbNail.dataset.thumbNailId
    );
    showBigPicture(picture);
  });
  generateThumbNails(pictures, container);
};

export { renderGallery };
