const buttons = document.createElement('div');
buttons.classList.add('buttons');

const buttons_list = [];
const labels = ["PROJECTS", "CLASSES", "CONTACT"]
const bgcolors = ["#3e2936", "#242336", "#224a32", "#222e4a", "#292929"]
const imgs = [];

for (let i = 0; i < labels.length; i++) {
  const button = buttons.appendChild(document.createElement('div'));
  button.classList.add('button');
  button.id = labels[i];
  button.style.backgroundColor = bgcolors[i];

  const icon = button.appendChild(document.createElement('img'));
  icon.src = imgs[i];
  icon.classList.add('buttonicon');

  const textbox = button.appendChild(document.createElement('div'));
  textbox.classList.add('buttontextcontainer');

  const header = textbox.appendChild(document.createElement('h2'));
  header.classList.add('buttonheader');
  header.textContent = labels[i]

  const text = textbox.appendChild(document.createElement('p'));
  text.classList.add('buttontext');
  text.textContent = "INSERT DESCRIPTION OF BUTTON";

  buttons_list[i] = button;
}

document.body.appendChild(buttons);