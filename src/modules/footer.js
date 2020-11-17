const mainContainer = document.getElementById('container');

const footerDiv = document.createElement('div');
footerDiv.classList.add('footer-div');

const footer = () => {
  mainContainer.appendChild(footerDiv);
};

export default footer();
