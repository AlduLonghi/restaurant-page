const homeContainer = document.createElement('div');
homeContainer.setAttribute('id', 'home-btn-container');
homeContainer.classList.add('tabbed-container', 'w-100', 'h-100');
homeContainer.textContent += 'Hello home';
homeContainer.style.display = 'block';

export default homeContainer;