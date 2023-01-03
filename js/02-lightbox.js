import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");


function createGallery(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `<a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"                
                alt="${description}"
            />
        </a>`;
        }).join('');
    
}
galleryEl.insertAdjacentHTML("afterbegin", galleryItems);

const addGallery = createGallery(galleryItems);
galleryEl.innerHTML = addGallery;

galleryEl.addEventListener("click", viewImage);
function viewImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }    
};
console.log(galleryEl.addEventListener)

new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});

