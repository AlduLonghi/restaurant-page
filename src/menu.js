const menuContainer = document.createElement('div');
menuContainer.setAttribute('id', 'menu-btn-container');
menuContainer.classList.add('tabbed-container', 'w-100', 'h-100');
menuContainer.textContent += 'Hello menu';
menuContainer.style.display = 'none';

export default menuContainer;