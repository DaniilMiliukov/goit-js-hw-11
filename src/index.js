import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  onFormSubmit,
  onLoadMoreInfo,
} from './js/cannotLoad';
import { refs } from './js/reactRefs';


refs.btnLoadMore.style.display = 'none';
refs.form.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreInfo);