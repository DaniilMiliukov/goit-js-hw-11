import { refs } from './reactRefs';
export function cleanGallery() {
  refs.listInfo.innerHTML = '';
  let pageNumber = 1;
  refs.btnLoadMore.style.display = 'none';
}