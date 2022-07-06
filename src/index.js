import { getRefs } from './js/refs';
import galleryList from './js/galleryList';
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

// import { refs } from './js/refs';
import { createMarkup } from './js/createMarkup';
const refs = getRefs();
console.log(refs);
const markup = createMarkup(galleryList).join('');

refs.gallery.insertAdjacentHTML('beforeend', markup);

const onDocumentScroll = () => {
  console.log(window.pageYOffset);
};

const throttledScroll = throttle(onDocumentScroll, 400);

document.addEventListener('scroll', throttledScroll);

console.log(Player);
