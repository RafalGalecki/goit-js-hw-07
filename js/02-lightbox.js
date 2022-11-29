"use strict";

import { galleryItems } from "./gallery-items.js";

const myGallery = document.querySelector("ul.gallery");

createSimpleGalleryItems();

function createSimpleGalleryItems() {
  const items = galleryItems
    .map(
      (image) =>
        `<a class="gallery__item" href="${image.original}"><img class="gallery__image" src="${image.preview}" alt="${image.description}"/></a>`
    )
    .join("");
  myGallery.insertAdjacentHTML("beforeend", items);
}

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on();
