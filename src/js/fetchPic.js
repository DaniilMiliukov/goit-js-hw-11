import axios from 'axios';
const MY_KEY = '36807086-5fb5ca8c7219045446d2ce6af';
const BASE_URL = 'https://pixabay.com/api/';
let pageNumber = 1;
export async function fetchImages(value, pageNumber) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${MY_KEY}&q=${value}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNumber}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}