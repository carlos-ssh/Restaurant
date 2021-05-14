let about = () => {
  let body = document.querySelector('body');
  let content = document.getElementById('content');
  content.classList.add('about');
  
  let about = document.getElementById('about');
  about.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');
  
  let header = document.createElement('header');

  let headline = document.createElement('h1');
  headline.innerHTML = 'Meet our History <br> Olive & Honey';
  headline.id = 'headline';

  let tagline = document.createElement('p');
  tagline.innerHTML = 'Our early time was making artisan cheese, wine and craft beer.'
  tagline.id = 'tagline';

  let txtHome = document.createElement('p');
  txtHome.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Donec eu velit quam. Donec eget lectus a turpis accumsan imperdiet. <br> Sed rutrum nibh pretium enim commodo laoreet. Cras nec sollicitudin mi. <br> Nunc vestibulum ex nec fermentum mattis. Sed pulvinar vel justo et vulputate. Mauris vitae turpis augue. <br> Nulla diam metus, imperdiet rhoncus aliquam ac, egestas vitae turpis. Suspendisse hendrerit lectus eget molestie ultrices. <br> Nam tincidunt commodo mattis. Curabitur luctus purus ac porta efficitur. <br> Nam volutpat sem ut lacus pellentesque, quis euismod metus vehicula. ';
  txtHome.id = 'txthome';

  content.appendChild(container);
  container.appendChild(header);
  container.appendChild(headline);
  container.appendChild(tagline);
  container.appendChild(txtHome);

  let footer = document.querySelector('footer');
  body.insertBefore(container);

}

export default about;