export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.innerHTML = '';
  } else {
    console.error('Gallery element not found!');
  }
}

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.innerHTML = images
      .map(
        image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}">
        </a>
      </li>
    `
      )
      .join('');
  } else {
    console.error('Gallery element not found!');
  }
}
