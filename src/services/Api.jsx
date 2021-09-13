import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = (query, page) => {
  const params = 'image_type=photo&orientation=horizontal&per_page=12';
  const key = '22579903-23cd6d72a32c76f3810c95a65';
  const response = axios
    .get(`?key=${key}&q=${query}&page=${page}&${params}`)
    .then(response => response.data);
  return response;
};
