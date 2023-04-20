import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const createImg = galleryItems.map((el) => {
  const { preview, original, description } = el;
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
        src="${preview}"
        alt="${description}"
        loading="lazy"/>
    </a>
  </li>`;
});

galleryEl.insertAdjacentHTML("beforeend", createImg.join(""));

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
