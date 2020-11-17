import burger1 from '../assets/burger-1.jpg';
import burger2 from '../assets/burger-2.jpg';
import burger3 from '../assets/burger-3.jpg';

const menuContainer = document.createElement('div');
menuContainer.setAttribute('id', 'menu-btn-container');
menuContainer.classList.add('tabbed-container', 'w-75', 'h-100', 'mx-auto');
menuContainer.style.display = 'none';

const cardContainer = document.createElement('div');
cardContainer.classList.add('w-100', 'h-100', 'd-flex', 'justify-content-between', 'py-4');

const menuCards = () => {
    const menuPics = [burger1, burger2, burger3]; 

    for (let i = 0; i < menuPics.length; i += 1) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'menu-card');

        const cardImg = document.createElement('img');
        cardImg.src = menuPics[i];
        cardImg.classList.add('card-img-top');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent += '$5';

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent += 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

        cardBody.append(cardTitle, cardText);
        cardDiv.append(cardImg, cardBody);
        cardContainer.appendChild(cardDiv);
    }
    return cardContainer;
}

menuContainer.appendChild(menuCards());
export default menuContainer;