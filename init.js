const buttons = document.createElement('div');
buttons.classList.add('buttons');

const buttons_list = [];
const labels = ["PROJECTS", "CLASSES", "CONTACT", "SOMETHING", "ABOUT"]
const bgcolors = ["#3e2936", "#242336", "#224a32", "#222e4a", "#292929"]
const imgs = ["prj.png"];

// initialize buttons
for (let i = 0; i < labels.length; i++) {
  // button container and buttons
  const button = buttons.appendChild(document.createElement('div'));
  button.classList.add('button');
  button.id = labels[i];
  button.style.backgroundColor = bgcolors[i];

  // button borders
  var color = changeBrightness(bgcolors[i], 2);
  button.style.borderTopColor = color;

  color = changeBrightness(bgcolors[i], 1.5);
  button.style.borderLeftColor = color;

  color = changeBrightness(bgcolors[i], 0.5);
  button.style.borderBottomColor = color;

  // icon on left side of button
  const icon = button.appendChild(document.createElement('img'));
  icon.src = imgs[i];
  icon.classList.add('buttonicon');

  // text on right side of button
  const textbox = button.appendChild(document.createElement('div'));
  textbox.classList.add('buttontextcontainer');

  const header = textbox.appendChild(document.createElement('h1'));
  header.classList.add('buttonheader');
  header.textContent = labels[i]
  header.style.color = changeBrightness(bgcolors[i], 4);

  const text = textbox.appendChild(document.createElement('h3'));
  text.classList.add('buttontext');
  text.textContent = "insert a nice little description!";
  text.style.color = changeBrightness(bgcolors[i], 2);

  buttons_list[i] = button;
}

document.body.appendChild(buttons);

function changeBrightness(rgb, percent) {
  // parse for hexcode values
  var r = parseInt(rgb.slice(1, 3), 16);
  var g = parseInt(rgb.slice(3, 5), 16);
  var b = parseInt(rgb.slice(5, 7), 16);
  // take min of 255 (max value) or percent times hexcode
  r = Math.min(255, Math.floor(r * percent));
  g = Math.min(255, Math.floor(g * percent));
  b = Math.min(255, Math.floor(b * percent));

  hexcode = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return hexcode;
}