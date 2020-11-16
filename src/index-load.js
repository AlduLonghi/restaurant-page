import homeContainer from './home';
import aboutContainer from './about';
import menuContainer from './menu';
import contactContainer from './contact';

const mainContainer = document.getElementById('container');

const divContainer = document.createElement('div');
divContainer.setAttribute('id', 'tabbed-container');
divContainer.classList.add('div-container');

const onclickEvent = (id) => {
  const tabbedContainers = document.querySelectorAll('.tabbed-container');
  tabbedContainers.forEach(cont => {
    cont.style.display = 'none';
  });
  const displayContainer = document.getElementById(`${id}-container`);
  displayContainer.style.display = 'block';
}

const onclickEventSetter = () => {
  const links = document.querySelectorAll('.links');
  links.forEach(link => {
    link.addEventListener('click', () => {
      onclickEvent(link.id);
    });
  });
}

function indexLoad() {
  divContainer.append(homeContainer, aboutContainer, menuContainer, contactContainer);
  mainContainer.appendChild(divContainer);
  onclickEventSetter();
}

export default indexLoad();