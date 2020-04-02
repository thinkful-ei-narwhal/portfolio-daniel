import page from './page.js';
import store from './store.js';

const main = function() {
  page.bindEventListeners();
  page.render();
};

$(main);