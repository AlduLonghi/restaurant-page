const navbarContainer = document.createElement('nav');
navbarContainer.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');
  
const navbarInnerDiv = document.createElement('div');
navbarInnerDiv.classList.add('navbar-nav', 'justify-content-around', 'w-100');

const mainContainer = document.getElementById('container');
  
  function navbarLinks() {
      let icons = ['fa', 'fa', 'fab', 'fas'];
      let iconsClass = ['fa-home', 'fa-cutlery', 'fa-elementor', 'fa-phone'];
      let text =['Home', 'About', 'Menu', 'Contact'];
  
      for (let j = 0; j < icons.length; j += 1) {
          let linkElem = document.createElement('a');
          linkElem.href = '#';
          linkElem.classList.add('d-flex', 'links');
  
          let iconElem = document.createElement('i');
          iconElem.classList.add(icons[j], iconsClass[j], 'nav-link');
  
          let textElem = document.createElement('p');
          textElem.textContent += text[j];
          textElem.classList.add('nav-link', 'mb-0');
  
          linkElem.append(iconElem, textElem);
          navbarInnerDiv.appendChild(linkElem);
      }
  
      return navbarInnerDiv;
  }
  
function navbar() {
    const links = navbarLinks();

    navbarContainer.appendChild(links);
    mainContainer.append(navbarContainer);
}

export default navbar();