let nav = () => {
    let nav = document.createElement('nav');

    let logo = document.createElement('h4');
    logo.innerHTML = 'Olive & Honey';
    logo.id = 'logo';

    let home = document.createElement('button');
    home.innerHTML = 'Home';
    home.id = 'Home';

    let menu = document.createElement('button');
    menu.innerHTML = 'Menu';
    menu.id = 'menu';

    let about = document.createElement('button');
    about.innerHTML = 'About Us ';
    about.id = 'about';

    let contact = document.createElement('button');
    contact.innerHTML = 'Contact';
    contact.id = 'contact';

    nav.appendChild(logo);
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
    nav.appendChild(contact);

    return nav;
}

export default nav;