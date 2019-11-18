/* eslint no-bitwise: ["error", { "allow": ["|", "<<"] }] */
/* eslint no-cond-assign: 2 */
/* eslint no-console: ["error", { allow: ["error"] }] */


const A = [
  ['00BCD4', 'FFEB3B', 'FFEB3B', '00BCD4'],
  ['FFEB3B', 'FFC107', 'FFC107', 'FFEB3B'],
  ['FFEB3B', 'FFC107', 'FFC107', 'FFEB3B'],
  ['00BCD4', 'FFEB3B', 'FFEB3B', '00BCD4'],
];

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const pencilLine = document.querySelector('#pencil');
const fillLine = document.querySelector('#fill_bucket');
const pipetteLine = document.querySelector('#pipette');
const settingsPanel = document.querySelector('#settings_panel');

const currentColor = document.querySelector('#current_color');
const prevColor = document.querySelector('#prev_color');
const redColor = document.querySelector('#red_color');
const blueColor = document.querySelector('#blue_color');

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let width = A[0].length;
let height = A.length;
let scale = 128;

canvas.width = width * scale;
canvas.height = height * scale;

// for pencil to save color
let xx; // cur color

const loadPicBtn = document.querySelector('#loadPic');
const makeBWBtn = document.querySelector('#makeBW');

function showFirst() {
  width = A[0].length;
  height = A.length;
  scale = 128;
  for (let row = 0; row < height; row += 1) {
    for (let col = 0; col < width; col += 1) {
      ctx.fillStyle = `#${A[row][col]}`;
      ctx.fillRect(col * scale, row * scale, scale, scale);
    }
  }
}

function showSecond() {
  scale = 16;

  // for (let row = 0; row < height; row += 1) {
  //   for (let col = 0; col < width; col += 1) {
  //     // ctx.fillStyle = ;
  //     ctx.fillRect(col * scale, row * scale, scale, scale);
  //   }
  // }
}

function showThird() {
  const img1 = new Image();

  img1.onload = function showThirdImg() {
    ctx.drawImage(img1, 0, 0, canvas.width, canvas.height);
  };
  img1.src = 'assets/images/image.png';
}

first.addEventListener('click', showFirst);
second.addEventListener('click', showSecond);
third.addEventListener('click', showThird);

// add cursor
function setCursorClass() {
  if (pencilLine.classList.contains('active_tool')) {
    canvas.classList.add('active_pencil');
    canvas.classList.remove('active_fill');
    canvas.classList.remove('active_pipette');
  } else if (fillLine.classList.contains('active_tool')) {
    canvas.classList.remove('active_pencil');
    canvas.classList.add('active_fill');
    canvas.classList.remove('active_pipette');
  } else if (pipetteLine.classList.contains('active_tool')) {
    canvas.classList.remove('active_pencil');
    canvas.classList.remove('active_fill');
    canvas.classList.add('active_pipette');
  }
}

// for drawWithPencil
const mouse = { x: 0, y: 0 };
let isMouseDown = false;

// draw with pencil
function drawWithPencil() {
  canvas.addEventListener('mousedown', function drawWithPencilDown(e) {
    if (pencilLine.classList.contains('active_tool')) {
      isMouseDown = true;
      ctx.beginPath();
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
      ctx.moveTo(mouse.x, mouse.y);
    }
  });

  canvas.addEventListener('mousemove', function drawWithPencilMove(e) {
    if (pencilLine.classList.contains('active_tool')) {
      if (isMouseDown) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = xx;
        ctx.stroke();
      }
    }
  });

  canvas.addEventListener('mouseup', function drawWithPencilUp(e) {
    if (pencilLine.classList.contains('active_tool')) {
      ctx.beginPath();

      isMouseDown = false;
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
      ctx.closePath();
    }
  });
}

if (pencilLine.classList.contains('active_tool')) {
  drawWithPencil();
}

function chooseCurrentColor(event) {
  xx = event.target.value;
}

function addPrevToCurColor(event) {
  event.preventDefault();
  currentColor.value = event.target.value;
  xx = event.target.value;
}

function addPrevColor(event) {
  prevColor.value = event.target.value;
}

function addPredefinedColor(event) {
  event.preventDefault();
  prevColor.value = currentColor.value;
}

function chooseRedColor(event) {
  event.preventDefault();

  currentColor.value = event.target.value;
  xx = event.target.value;
}

function chooseBlueColor(event) {
  event.preventDefault();

  currentColor.value = event.target.value;
  xx = event.target.value;
}

// save current color
currentColor.addEventListener('input', chooseCurrentColor);
prevColor.addEventListener('click', addPrevToCurColor);
// for prev color
currentColor.addEventListener('click', addPrevColor);
redColor.addEventListener('click', addPredefinedColor);
redColor.addEventListener('click', chooseRedColor);
blueColor.addEventListener('click', addPredefinedColor);
blueColor.addEventListener('click', chooseBlueColor);

// fill bucket
function fillBucket() {
  canvas.addEventListener('click', () => {
    if (fillLine.classList.contains('active_tool')) {
      ctx.beginPath();
      ctx.rect(0, 0, 512, 512);
      ctx.fillStyle = currentColor.value;
      ctx.fill();
    }
  });
}

// pipette
function getColor() {
  canvas.addEventListener('mousedown', function getColorDown(e) {
    function findPos(obj) {
      let curLeft = 0; let
        curTop = 0;
      if (obj.offsetParent) {
        do {
          curLeft += obj.offsetLeft;
          curTop += obj.offsetTop;
        } while (obj === obj.offsetParent);
        return { x: curLeft, y: curTop };
      }
      return undefined;
    }

    function rgbToHex(r, g, b) {
      // if (r > 255 || g > 255 || b > 255) throw 'Invalid color component';
      return ((r << 16) | (g << 8) | b).toString(16);
    }

    if (pipetteLine.classList.contains('active_tool')) {
      const pos = findPos(this);
      const x = e.pageX - pos.x;
      const y = e.pageY - pos.y;
      const canv = this.getContext('2d');
      const p = canv.getImageData(x, y, 1, 1).data;
      const hex = `#${(`000000${rgbToHex(p[0], p[1], p[2])}`).slice(-6)}`;
      currentColor.value = hex;
      const prevColPipette = currentColor.value;

      canvas.addEventListener('mousedown', () => {
        prevColor.value = prevColPipette;
      });
    }
  });
}

// choose tool on click
settingsPanel.addEventListener('click', (event) => {
  const tool = event.target.closest('.settings_panel--item');
  document.querySelectorAll('.settings_panel--item').forEach((el) => el.classList.remove('active_tool'));
  tool.classList.add('active_tool');
  getColor();
  fillBucket();
  drawWithPencil();
  setCursorClass();
});

// choose tool on keyboard
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 80) {
    // paint pencil
    pencilLine.classList.add('active_tool');
    fillLine.classList.remove('active_tool');
    pipetteLine.classList.remove('active_tool');
    setCursorClass();
    drawWithPencil();
  }

  if (e.keyCode === 66) {
    // fill bucket
    pencilLine.classList.remove('active_tool');
    fillLine.classList.add('active_tool');
    pipetteLine.classList.remove('active_tool');
    setCursorClass();
    fillBucket();
  }

  if (e.keyCode === 67) {
    // pipette
    pencilLine.classList.remove('active_tool');
    fillLine.classList.remove('active_tool');
    pipetteLine.classList.add('active_tool');
    setCursorClass();
    getColor();
  }
});

const img = new Image();
img.crossOrigin = 'Anonymous';
const search = document.querySelector('#searchPic');

async function getLinkToImage() {
  const baseUrl = 'https://api.unsplash.com/photos/random';
  const queryString = `?query=town,${search.value}`;
  const accessKey = '&client_id=e10169868aa84b3cfd73a2e24b5fb38b499996ce5688121df095d288b7291e8f';
  const url = baseUrl + queryString + accessKey;

  try {
    const response = await fetch(url);
    const data = await response.json();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // check size of img
    img.onload = function loadImg() {
      if (img.width === img.height) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      } else if (img.width > img.height) {
        // let resizeHeight = canvas.width/img.width;
        ctx.drawImage(img, 0, (canvas.height - (canvas.width / img.width) * img.height) / 2,
          canvas.width, (canvas.width / img.width) * img.height);
      } else if (img.width < img.height) {
        // let resizeWidth = canvas.height/img.height;
        ctx.drawImage(img, (canvas.width - (canvas.height / img.height) * img.width) / 2, 0,
          (canvas.height / img.height) * img.width, canvas.height);
      }
    };
    img.src = data.urls.small;
  } catch (e) {
    console.error(e);
  }
}

function greyScale() {
  if (img.width === 0) {
    alert('click on LOAD to load the picture');
  } else {
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let pixels = imgData.data;
    for (let i = 0, n = pixels.length; i < n; i += 4) {
        let grayscale = pixels[i] * .3 + pixels[i + 1] * .59 + pixels[i + 2] * .11;
        pixels[i] = grayscale;
        pixels[i + 1] = grayscale;
        pixels[i + 2] = grayscale;
    }
    ctx.putImageData(imgData, 0, 0);

  }
}

loadPicBtn.addEventListener('click', getLinkToImage);
makeBWBtn.addEventListener('click', greyScale);

// localstorage
window.onbeforeunload = function beforeLoad() {
  localStorage.setItem(canvas, canvas.toDataURL());
  return false;
};

document.addEventListener('DOMContentLoaded', () => {
  const dataURL = localStorage.getItem(canvas);
  const savedImage = new Image();
  savedImage.src = dataURL;
  savedImage.onload = function drawSavedCanvas() {
    ctx.drawImage(savedImage, 0, 0);
  };
});
