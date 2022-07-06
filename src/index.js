import galleryList from './js/galleryList';
import { getRefs } from './js/refs';
// import { refs } from './js/refs';
import { createMarkup } from './js/createMarkup';
const refs = getRefs();

const markup = createMarkup(galleryList).join('');

refs.gallery.insertAdjacentHTML('beforeend', markup);
