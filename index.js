import { showLoadingMessage, showEmojis, showErrorMessage } from './view';

import 'whatwg-fetch#?conditions.needsFetchShim';

showLoadingMessage();

fetch('https://api.github.com/emojis')
  .then(response => response.json())
  .then(showEmojis)
  .catch(showErrorMessage);
