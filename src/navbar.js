const navbarContainer = document.createElement('nav');
navbarContainer.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');

const navbarInnerDiv = document.createElement('div');
navbarInnerDiv.classList.add('navbar-nav', 'justify-content-around', 'w-100');

const mainContainer = document.getElementById('container');

const onclickEvent = (id) => {
  const tabbedContainers = document.querySelectorAll('.tabbed-container');
  tabbedContainers.forEach(cont => {
    cont.style.display = 'none';
  });
  const displayContainer = document.getElementById(`${id}-container`);
  displayContainer.style.display = 'block';
}

const navbarLinks = () => {
  const icons = ['fa', 'fa', 'fab', 'fas'];
  const iconsClass = ['fa-home', 'fa-cutlery', 'fa-elementor', 'fa-phone'];
  const text = ['Home', 'About', 'Menu', 'Contact'];

  for (let j = 0; j < icons.length; j += 1) {
    const linkElem = document.createElement('a');
    linkElem.href = '#';
    linkElem.classList.add('d-flex', 'links');
    linkElem.setAttribute('id', `${text[j]}-btn`.toLowerCase());
    linkElem.addEventListener('click', () => {
      onclickEvent(`${text[j]}-btn`.toLowerCase())});

    const iconElem = document.createElement('i');
    iconElem.classList.add(icons[j], iconsClass[j], 'nav-link');

    const textElem = document.createElement('p');
    textElem.textContent += text[j];
    textElem.classList.add('nav-link', 'mb-0');

    linkElem.append(iconElem, textElem);
    navbarInnerDiv.appendChild(linkElem);
  };
  return navbarInnerDiv;
}

function navbar() {
  const links = navbarLinks();

  navbarContainer.appendChild(links);
  mainContainer.append(navbarContainer);
}

export default navbar();