let menu = () => {
  let content = document.getElementById('content');
  content.classList.add('menu');

  let menuButton = document.getElementById('menu');
  menuButton.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');

  let headerTxt = document.createElement('h1');
  headerTxt.innerHTML = 'SPECIALS';

  container.appendChild(menu);

  let body = document.querySelector('body');
  let footer = document.querySelector('footer');

  body.insertBefore(container, footer);

};

export default menu;