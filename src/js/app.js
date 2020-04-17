import BrandValidForm from './BrandValidForm';

// eslint-disable-next-line no-console
console.log('it works!');

document.body.innerHTML = '<div class="app-container"></div>';

const container = document.querySelector('.app-container');

const form = new BrandValidForm(container);
form.bindToDOM();
