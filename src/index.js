import home from './home';
import './style.css';

home();

let homeBtn = document.getElementById('home');
homeBtn.onClick = () => {
    home();
};
