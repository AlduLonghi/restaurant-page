import restPic1 from './assets/restaurant-1.jpg';
import restPic2 from './assets/restaurant-2.jpg';
import restPic3 from './assets/restaurant-3.jpg';


const aboutContainer = document.createElement('div');
aboutContainer.setAttribute('id', 'about-btn-container');
aboutContainer.classList.add('tabbed-container', 'w-75', 'h-100', 'text-center', 'mx-auto');
aboutContainer.style.display = 'none';

const aboutText = document.createElement('p');
aboutText.classList.add('about-text', 'pt-4');
aboutText.textContent += `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Duis sagittis fermentum nunc, eget pretium nisi dictum quis. Donec mauris dolor, 
 bibendum at venenatis dignissim, cursus ut tortor. Etiam at neque quis justo tempor imperdiet vitae id urna. 
 Curabitur hendrerit bibendum nisi eu lobortis. Donec auctor, risus vitae eleifend convallis, tortor orci molestie dui, 
 vitae mollis odio purus id orci. Curabitur ornare ac massa et tincidunt. Aenean cursus nibh et blandit posuere.`

const aboutImages = () => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container', 'd-flex', 'justify-content-between');
    
    const imageSrc = [restPic1, restPic2, restPic3];

    for (let i = 0; i < imageSrc.length; i += 1) {
        const image = document.createElement('img');
        image.classList.add('rest-img');
        image.src = imageSrc[i];

        imageContainer.appendChild(image);
    }

    return imageContainer
}

const imageCont = aboutImages();

aboutContainer.appendChild(aboutText);
aboutContainer.appendChild(imageCont);

export default aboutContainer;