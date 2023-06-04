import { fetchImages } from './fetchPic';
import { cleanGallery } from './delGallery';
import { creatValue } from './valueCount';
import { renderImageList } from './renderImageList';
import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';

import { refs } from './reactRefs';

let gallerySimpleLightbox = new SimpleLightbox('.gallery a');
let pageNumber = 1;
export async function onFormSubmit(evt) {
  try {
    evt.preventDefault();
    cleanGallery();
    const inputFormData = creatValue(evt);
    const value = inputFormData.searchQuery;

    if (value !== '') {
      const response = await fetchImages(value, pageNumber);

      if (response.total === 0) {
        console.log(response);
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        Notiflix.Notify.success(
          `Hooray! We found ${response.totalHits} images.`
        );
        renderImageList(response.hits);
        refs.btnLoadMore.style.display = 'block';
        gallerySimpleLightbox.refresh();
      }
    }
  } catch (error) {
    console.log(error);
  }
}
export async function onLoadMoreInfo(evt) {
  try {
    pageNumber++;
    const value = refs.form.elements.searchQuery.value;
    const response = await fetchImages(value, pageNumber);
    renderImageList(response.hits);

    if (response.hits.length < 40) {
      refs.btnLoadMore.style.display = 'none';
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
    }
  } catch (error) {
    console.log(error);
  }
}