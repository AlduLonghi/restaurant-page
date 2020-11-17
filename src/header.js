import Burger from './assets/Big-Poppa-2.png';

const headerContainer = document.createElement('div');
headerContainer.classList.add('header', 'd-flex', 'align-items-center', 'justify-content-around');

const container = document.getElementById('container');
container.classList.add('container-lg', 'px-0');

const headerImage = document.createElement('img');
headerImage.src = Burger;
headerImage.classList.add('h-75');

const headerText = () => {
  const textContainer = document.createElement('span');
  textContainer.classList.add('w-50', 'h-100', 'brand-container', 'd-flex', 'flex-column', 'justify-content-around');

  const brandText = document.createElement('p');
  brandText.textContent += 'Cheese masters';
  brandText.classList.add('brand', 'text-center');

  const sloganText = document.createElement('p');
  sloganText.textContent += 'The greasiest, the better!';
  sloganText.classList.add('slogan', 'text-center');

  textContainer.appendChild(brandText);
  textContainer.appendChild(sloganText);
  return textContainer;
}

const header = () => {
  const headerT = headerText();

  headerContainer.append(headerT, headerImage);
  container.appendChild(headerContainer);
}

export default header();
