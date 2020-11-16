const aboutContainer = document.createElement('div');
aboutContainer.setAttribute('id', 'about-btn-container');
aboutContainer.classList.add('tabbed-container', 'w-100', 'h-100');
aboutContainer.textContent += 'Hello about';
aboutContainer.style.display = 'none';

export default aboutContainer;