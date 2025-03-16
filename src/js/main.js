import { fetchImages } from './pixabay-api';
import { renderGallery, clearGallery } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target['search-text'].value.trim();
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search term.' });
    return;
  }
  clearGallery();
  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      iziToast.info({ title: 'Info', message: 'Sorry, no images found.' });
    } else {
      renderGallery(images);
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Failed to fetch images.' });
  }
});
