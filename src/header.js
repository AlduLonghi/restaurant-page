import Burger from './assets/Big-Poppa-2.png';

function headerContainer() {
  let container = document.createElement('div');
  container.classList.add('header', 'd-flex', 'align-items-center', 'justify-content-around');
  return container;
};

function headerText() {
let textContainer = document.createElement('span');
textContainer.classList.add('w-50', 'h-100', 'brand-container', 'd-flex', 'flex-column', 'justify-content-around');

let brandText = document.createElement('p');
brandText.textContent += "Cheese masters";
brandText.classList.add('brand', 'text-center');

let sloganText = document.createElement('p');
sloganText.textContent += "The greesiest, the better!";
sloganText.classList.add('slogan', 'text-center');

textContainer.appendChild(brandText);
textContainer.appendChild(sloganText);
return textContainer;
}

function headerImage() {
  let img = document.createElement('img');
  img.src = Burger;
  img.classList.add('h-75');
  return img;
}

function header() {
    let container = document.getElementById('container');
    let headerCont = headerContainer();
    let headerT = headerText();
    let headerImg = headerImage();

    headerCont.appendChild(headerT);
    headerCont.appendChild(headerImg);
    container.appendChild(headerCont);
    container.classList.add('container-lg', 'px-0');
}

export default header();
