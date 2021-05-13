import home from './home';
import menu from './menu';
import about from './about';
import contact from './contact';
import clean from './clean';
import './reset.css';
import './style.css';

home();

let homeBtn = document.getElementById('home');
homeBtn.onClick = () => {
    clean();
    home();
};

let menuBtn = document.getElementById('menu');
menuBtn.onClick = () => {
    clean();
    menu();
};

let aboutBtn = document.getElementById('about');
aboutBtn.onClick = () => {
    clean();
    about();
}

let contactBtn = document.getElementById('contact');
contactBtn.onClick = () => {
    clean();
    contact();
}
