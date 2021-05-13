let about = () => {
  let body = document.querySelector('body');
  let content = document.getElementById('content');
  content.classList.add('about');
  
  let about = document.getElementById('about');
  about.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');

  let headline = document.createElement('h1');
  let tagline = document.createElement('p');
  tagline.classList.add('text');

  headline.innerHTML = 'Meet our History Olive & Honey';
  tagline.innerHTML = 'Our early time was making artisain cheese, wine and craft beer.'


  container.appendChild(headline);
  container.appendChild(tagline);

  let footer = document.querySelector('footer');
  body.insertBefore(container, footer);

};

export default about;