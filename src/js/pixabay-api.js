import axios from 'axios';

// Вставте ваш API-ключ тут
const API_KEY = '49374339-6c81470c324f76695f53d1c98'; // Ваш ключ

const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const params = {
    key: API_KEY, // Використовуйте змінну API_KEY
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  const response = await axios.get(BASE_URL, { params });
  return response.data.hits;
}
