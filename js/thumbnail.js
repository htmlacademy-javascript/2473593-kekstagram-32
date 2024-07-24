const thumbNailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbNail = ({ comments, description, likes, url, id }) => {
  const thumbNail = thumbNailTemplate.cloneNode(true);

  thumbNail.querySelector('.picture__img').src = url;
  thumbNail.querySelector('.picture__img').alt = description;
  thumbNail.querySelector('.picture__comments').textContent = comments.length;
  thumbNail.querySelector('.picture__likes').textContent = likes;
  thumbNail.dataset.thumbNailId = id;

  return thumbNail;
};

const generateThumbNails = (pictures, container) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach ((picture) => {
    const thumbNail = createThumbNail(picture);
    fragment.append(thumbNail);
  });

  container.append(fragment);
};

export { generateThumbNails };

