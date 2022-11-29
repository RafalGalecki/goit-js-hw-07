import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("div.gallery");


createGalleryItems();

function createGalleryItems() {
  const items = galleryItems
    .map(
      (image) =>
        `<div class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.alt}"/></a></div>`
    )
    .join("");
  gallery.insertAdjacentHTML("beforeend", items);
};

gallery.addEventListener("click", handleImageClick);

function handleImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    console.log(event.target.dataset.source);
}
