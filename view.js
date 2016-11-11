
export function showLoadingMessage() {
  render('<h1>Loading...</h1>');
}

export function showErrorMessage() {
  render('<span>=( something went wrong </span>');
}

export function showEmojis(emojis = {}) {
  const view = Object.keys(emojis)
    .map((key, index) => `
      <figure>
        <img class="emoji-${index}" alt="${key}" src="http://placehold.it/64" />
        <figcaption>${key}</figcaption>
      </figure>
    `)
    .join('');

  // load images asynchronously then replace the placeholder image
  Object.keys(emojis).forEach(function(key, index) {
    const src = emojis[key];

    loadImage(src)
      .then(() => replaceImageSource(index, src));
  });

  render(view || 'There are no emojis to show =(');
}

function render(content) {
  document.body.innerHTML = content;
}

function loadImage(src) {
  return new Promise(function(resolve, reject) {
    const img = new Image();

    img.onload = function() { resolve(src); };
    img.onerror = function() { reject(new Error(`Failed to load ${src}`)); };

    img.src = src;
  });
}

function replaceImageSource(index, src) {
  const img = document.querySelectorAll(`.emoji-${index}`).item(0);
  img.src = src;
}
