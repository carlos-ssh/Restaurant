import nav from './nav';
import footer from './footer';

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
    headline.id = 'headline';


    let tagline = document.createElement('p');
    tagline.innerHTML = 'Come and try our best fresh dishes!';
    tagline.id = 'tagline';
    header.appendChild(tagline);

    let txtHome = document.createElement('p');
    txtHome.innerHTML = "We are so excited to welcome you back for indoor dining! <br>" +
    "Due to limited dining space, please contact the restaurant directly <br>" +
    "if you would like to reserve a table. <br>" + 
    "We accept reservations for parties of 5 or less. <br>" +
    "We are open for Delivery and To-Go" +
    "7 days a week 12pm-9:45pm <br>" +
    "Wine, Beer & Cocktails Available To-Go! <br>" +
    "Delivery is through our delivery partners: <br>" +
    "DoorDash, GrubHub, Caviar, or Seamless <br>" +
    "- or - <br>" +
    "Pick Up and Reservations: Call 898-145-0000 <br>" +
    "<strong>Stay Safe!</strong>";
    txtHome.id = 'txthome';

    let reservations = document.createElement('a');
    reservations.innerHTML = "<a href='#'> Reserve Now </a>";
    reservations.id = 'reservations';
    
    content.appendChild(container);
    container.appendChild(header);
    container.appendChild(tagline);
    container.appendChild(txtHome);
    container.appendChild(reservations);
    header.appendChild(headline);
    
    if (!document.querySelector('footer')) {
        footer();
    }
}

export default home;