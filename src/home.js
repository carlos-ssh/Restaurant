import nav from './nav';
import footer from "./footer";

let home = () => {
    let content = document.getElementById('content');
    content.classList.add('home');

    if (!document.querySelector('nav')) {
        let navbar = nav()
        content.appendChild(navbar);
    }

    let home = document.getElementById('home');
    home.classList.add('active');

    let container = document.createElement('div');
    container.classList.add('container');

    let header = document.createElement('header');
    let headline = document.createElement('h1');
    headline.innerHTML = 'Olive & Honey';
    header.appendChild(headline);
    container.appendChild(header);

    let tagline = document.createElement('p');
    tagline.innerHTML = 'Come and try our best fresh dishes!';
    header.appendChild(tagline);

    content.appendChild(container);

    if (!document.querySelector('footer')) {
        footer();
    }

}

export default home