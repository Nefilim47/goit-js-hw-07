import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

console.log(galleryItems);

const createImg = galleryItems.map(el => {
    const {preview,original,description} = el;
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
})

galleryEl.insertAdjacentHTML("beforeend", createImg.join(""))

galleryEl.addEventListener("click", clickBigImg)

function clickBigImg(event) {
event.preventDefault();
if(!event.target.nodeName === "IMG") return;

const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" />
`);
instance.show()
}








