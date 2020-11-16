const contactContainer = document.createElement('div');
contactContainer.setAttribute('id', 'contact-btn-container');
contactContainer.classList.add('tabbed-container', 'w-100', 'h-100');
contactContainer.textContent += 'Hello contact';
contactContainer.style.display = 'none';

export default contactContainer;