const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const name = 'MUHAMMAD TAUFIQ BIN JURIMI';
const nameElem = document.getElementById('name');
let i = 0;

function typeWriter() {

  if (i < name.length) {
    nameElem.innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
  setTimeout(function() {
    var button = document.querySelector('.button-container');
    button.style.zIndex = 2;
    var button = document.querySelector('.button-container');
    button.style.opacity = 1;
  }, 7000);
}

typeWriter();

function setTimeDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const timeDate = now.toLocaleString('en-US', options);
    document.getElementById('time-date').innerHTML = timeDate;
}

// Update the time and date every second
setInterval(setTimeDate, 1000);


