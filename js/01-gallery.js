import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGallery(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `<a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>`;
        }).join('');
};

const addGallery = createGallery(galleryItems);
gallery.innerHTML = addGallery;

gallery.addEventListener("click", viewImage);
function viewImage(event) {    
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    };
    const preview = event.target.dataset.source;
    const instance = basicLightbox.create (
        `<img src="${preview}" width="800" height="600">`
    );
    instance.show();    
};
