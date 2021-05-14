import home from './home';
import menu from './menu';
import about from './about';
import contact from './contact';
import clear from './clear';
import './reset.css';
import './style.css';

home();

let homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
    clear();
    home();
};

let menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {
    clear();
    menu();
};

let aboutBtn = document.getElementById('about');
aboutBtn.onclick = () => {
    clear();
    about();
};

let contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
    clear();
    contact();
};