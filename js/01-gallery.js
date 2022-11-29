"use strict";

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("div.gallery");

createGalleryItems();

// gallery creation

function createGalleryItems() {
  const items = galleryItems
    .map(
      (image) =>
        `<div class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a></div>`
    )
    .join("");
  gallery.insertAdjacentHTML("beforeend", items);
}

gallery.addEventListener("click", handleImageClick);

//Listener to modal show

function handleImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
      instance.close();
    }
  });
}
