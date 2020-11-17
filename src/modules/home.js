import BurgerGif from '../assets/burger-gif.gif';

const homeContainer = document.createElement('div');
homeContainer.setAttribute('id', 'home-btn-container');
homeContainer.classList.add('tabbed-container', 'w-75', 'h-100', 'text-center', 'mx-auto');
homeContainer.style.display = 'block';

const homeTitle = document.createElement('h2');
homeTitle.classList.add('home-title', 'pt-5', 'd-block', 'w-75', 'mx-auto');
homeTitle.textContent += 'Welcome to Cheese Masters!';

const burger = document.createElement('img');
burger.src = BurgerGif;
burger.classList.add('burger-gif', 'pt-3', 'mt-5');

homeContainer.append(homeTitle, burger);
export default homeContainer;