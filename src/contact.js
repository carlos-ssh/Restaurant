let contact = () => {
  let content = document.getElementById('content');
  content.classList.add('contact');

  let contactBtn = document.getElementById('contact');
  contactBtn.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');

  let headline = document.createElement('h1');
  headline.innerHTML = 'Send us a message';

  let tagline = document.createElement('p');
  tagline.innerHTML = 'It would be great to hear something for you!';

  let phone = document.createElement('p');
  phone.innerHTML = 'Phone: +52 (442) 790 8959';

  let email = document.createElement('p');
  email.innerHTML = 'Mail: hello@carlosrobles.tech';

  container.appendChild(headline);
  container.appendChild(tagline);
  container.appendChild(phone);
  container.appendChild(mail);

  let body = document.querySelector('body');
  let footer = document.querySelector('footer');
  body.insertBefore(container, footer);

}

export default contact;