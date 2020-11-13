
function navbarContainer() {
    let navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');
    return navbar;
    
  }
  
  function navbarInnerDiv() {
    let innerDiv = document.createElement('div');
    innerDiv.classList.add('navbar-nav', 'justify-content-around', 'w-100');
    return innerDiv;
  }
  
  function navbarLinks() {
      let container = navbarInnerDiv();
      let icons = ['fa', 'fa', 'fab', 'fas'];
      let iconsClass = ['fa-home', 'fa-cutlery', 'fa-elementor', 'fa-phone'];
      let text =['Home', 'About', 'Menu', 'Contact'];
  
      for (let j = 0; j < icons.length; j += 1) {
          let spanElem = document.createElement('span');
          spanElem.classList.add('d-flex');
  
          let iconElem = document.createElement('i');
          iconElem.classList.add(icons[j], iconsClass[j], 'nav-link');
  
          let textElem = document.createElement('a');
          textElem.textContent += text[j];
          textElem.href = '#';
          textElem.classList.add('nav-link');
  
          spanElem.appendChild(iconElem);
          spanElem.appendChild(textElem);
          container.appendChild(spanElem);
          console.log(container);
      }
  
      return container;
  }
  
function navbar() {
    let mainContainer = document.getElementById('container');
    let navbar = navbarContainer();
    let links = navbarLinks();

    navbar.appendChild(links);
    mainContainer.appendChild(navbar);
}

export default navbar();