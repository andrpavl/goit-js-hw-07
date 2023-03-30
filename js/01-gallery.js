import { galleryItems } from './gallery-items.js';
// Change code below this line


const container = document.querySelector(".gallery");

const markup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img 
    class="gallery__image" 
    src="${preview}" 
    alt="${description}"
    data-source="${original}">
    </a>
    </li>`
).join("");
container.insertAdjacentHTML("beforeend", markup);
container.addEventListener('click', onClick)
let instance
function onClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    const originalImage = evt.target.dataset.source;
    const originalImageAlt = evt.target.alt
    instance = basicLightbox.create(`
    <div class="modal">
        <img src="${originalImage}" alt="${originalImageAlt}">
    </div>
    `);
    instance.show();
}

document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      if(instance){
      instance.close();
      }
    }
  });


