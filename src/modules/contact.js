const contactContainer = document.createElement('div');
contactContainer.setAttribute('id', 'contact-btn-container');
contactContainer.classList.add('tabbed-container', 'w-75', 'h-75', 'mx-auto', 'text-center', 'pt-5');
contactContainer.style.display = 'none';

const phoneTitle = document.createElement('h2');
phoneTitle.textContent += 'Phone number';
phoneTitle.classList.add('contact-title');

const phoneNumber = document.createElement('p');
phoneNumber.textContent += '+5648800334';
phoneNumber.classList.add('contact-description');

const adress = document.createElement('h2');
adress.textContent += 'Adress';
adress.classList.add('contact-title');

const adressDescription = document.createElement('p');
adressDescription.textContent += 'Lorem ipsum 8876, New York.';
adressDescription.classList.add('contact-description');

const reservations = document.createElement('h2');
reservations.textContent += 'Reservations';
reservations.classList.add('contact-title');

const reservEmail = document.createElement('p');
reservEmail.textContent += 'cheesemasters@gmail.com';
reservEmail.classList.add('contact-description');

contactContainer.append(phoneTitle,
  phoneNumber,
  adress,
  adressDescription,
  reservations,
  reservEmail);

export default contactContainer;