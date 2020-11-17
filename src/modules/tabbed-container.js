import homeContainer from './home';
import aboutContainer from './about';
import menuContainer from './menu';
import contactContainer from './contact';

const mainContainer = document.getElementById('container');

const divContainer = document.createElement('div');
divContainer.setAttribute('id', 'tabbed-container');
divContainer.classList.add('div-container');

const tabbedContainer = () => {
  divContainer.append(homeContainer, aboutContainer, menuContainer, contactContainer);
  mainContainer.appendChild(divContainer);
};

export default tabbedContainer();