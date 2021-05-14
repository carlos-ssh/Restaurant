let menu = () => {
  let content = document.getElementById('content');
  content.classList.add('menu');

  let menuBtn = document.getElementById('menu');
  menuBtn.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');

  let headerTxt = document.createElement('h1');
  headerTxt.innerHTML = 'Specials';
  headerTxt.id = 'headline';

  let tagline = document.createElement('h4');
  tagline.innerHTML = 'Our Season Three Times Dinner:'
  tagline.id = 'tagline';

  let txtHome = document.createElement('p');
  txtHome.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec eu velit quam. Donec eget lectus a turpis accumsan imperdiet. <br> Sed rutrum nibh pretium enim commodo laoreet. Cras nec sollicitudin mi. <br> Nunc vestibulum ex nec fermentum mattis. Sed pulvinar vel justo et vulputate. Mauris vitae turpis augue. <br> Nulla diam metus, imperdiet rhoncus aliquam ac, egestas vitae turpis. Suspendisse hendrerit lectus eget molestie ultrices. <br> Nam tincidunt commodo mattis. Curabitur luctus purus ac porta efficitur. <br> Nam volutpat sem ut lacus pellentesque, quis euismod metus vehicula. ';
  txtHome.id = 'txthome';

  content.appendChild(container);
  container.appendChild(headerTxt);
  container.appendChild(tagline);
  container.appendChild(txtHome);
  header.appendChild(headline);
  
  let body = document.querySelector('body');
  let footer = document.querySelector('footer');

  body.insertBefore(container, footer);
  
}

export default menu;