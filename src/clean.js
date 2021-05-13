let clean = () => {
  let content = document.getElementById('content');
  let container = document.getElementsByClassName('container')[0];

  container.remove();
  content.className = '';

  let buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = "";
  }
};

export default clean;