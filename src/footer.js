let footer = () => {
    let footer = document.createElement('footer');
    let footerTxt = document.createElement('p');
    
    footerTxt.innerHTML =  'Copyright 2021 <strong> Olive & Honey. </strong> developed by <a href="https://www.github.com/carlos-ssh"> Carlos-SSH </a>.'
    footer.appendChild(footerTxt);
    
    let body = document.querySelector('body');
    body.appendChild(footer);
};

export default footer;