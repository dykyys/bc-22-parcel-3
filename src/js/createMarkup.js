export const createMarkup = list => {
  return list.map(
    ({ alt, url, height, width }) => `
    <li class="gallery__item">
    <img src="${url}" alt="${alt}" width="${width}" height="${height}"/>
    </li>
    `
  );
};
