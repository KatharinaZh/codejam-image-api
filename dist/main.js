/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const A = [\r\n  ['00BCD4', 'FFEB3B', 'FFEB3B', '00BCD4'],\r\n  ['FFEB3B', 'FFC107', 'FFC107', 'FFEB3B'],\r\n  ['FFEB3B', 'FFC107', 'FFC107', 'FFEB3B'],\r\n  ['00BCD4', 'FFEB3B', 'FFEB3B', '00BCD4'],\r\n];\r\n\r\nconst first = document.getElementById('first');\r\nconst second = document.getElementById('second');\r\nconst third = document.getElementById('third');\r\n\r\nconst pencilLine = document.querySelector('#pencil');\r\nconst fillLine = document.querySelector('#fill_bucket');\r\nconst pipetteLine = document.querySelector('#pipette');\r\nconst settingsPanel = document.querySelector('#settings_panel');\r\n\r\nconst currentColor = document.querySelector('#current_color');\r\nconst prevColor = document.querySelector('#prev_color');\r\nconst redColor = document.querySelector('#red_color');\r\nconst blueColor = document.querySelector('#blue_color');\r\n\r\nconst canvas = document.querySelector('#canvas');\r\nconst ctx = canvas.getContext('2d');\r\nlet width = A[0].length;\r\nlet height = A.length;\r\nlet scale = 128;\r\n\r\ncanvas.width = width * scale;\r\ncanvas.height = height * scale;\r\n\r\nconst fillStyleWith = '';\r\n\r\n\r\n// for pencil to save color\r\nlet xx; // cur color\r\nlet cc; // prev color\r\n\r\nconst loadPicBtn = document.querySelector('#loadPic');\r\nconst makeBWBtn = document.querySelector('#makeBW');\r\n\r\nfirst.addEventListener('click', showFirst);\r\nsecond.addEventListener('click', showSecond);\r\nthird.addEventListener('click', showThird);\r\n\r\nfunction showFirst(fillStyleWith) {\r\n  width = A[0].length;\r\n  height = A.length;\r\n  scale = 128;\r\n  for (let row = 0; row < height; row++) {\r\n    for (let col = 0; col < width; col++) {\r\n      fillStyleWith = `#${A[row][col]}`;\r\n      ctx.fillStyle = fillStyleWith;\r\n      ctx.fillRect(col * scale, row * scale, scale, scale);\r\n    }\r\n  }\r\n}\r\n\r\nfunction showSecond(fillStyleWith) {\r\n  width = B[0].length,\r\n  height = B.length,\r\n  scale = 16;\r\n\r\n  for (let row = 0; row < height; row++) {\r\n    for (let col = 0; col < width; col++) {\r\n      fillStyleWith = `rgba(${B[row][col]})`;\r\n      ctx.fillStyle = fillStyleWith;\r\n      ctx.fillRect(col * scale, row * scale, scale, scale);\r\n    }\r\n  }\r\n}\r\n\r\nfunction showThird() {\r\n  const img1 = new Image();\r\n\r\n  img1.onload = function () {\r\n    ctx.drawImage(img1, 0, 0, 512, 512);\r\n  };\r\n  img1.src = 'assets/images/image.png';\r\n}\r\n\r\nif (pencilLine.classList.contains('active_tool')) {\r\n  drawWithPencil();\r\n}\r\n\r\n// choose tool on click\r\nsettingsPanel.addEventListener('click', (event) => {\r\n  const tool = event.target.closest('.settings_panel--item');\r\n  const elements = [];\r\n  document.querySelectorAll('.settings_panel--item').forEach((tool) => tool.classList.remove('active_tool'));\r\n  tool.classList.add('active_tool');\r\n  getColor();\r\n  fillBucket();\r\n  drawWithPencil();\r\n  setCursorClass();\r\n});\r\n\r\n\r\n// add cursor\r\nfunction setCursorClass() {\r\n  if (pencilLine.classList.contains('active_tool')) {\r\n    canvas.classList.add('active_pencil');\r\n    canvas.classList.remove('active_fill');\r\n    canvas.classList.remove('active_pipette');\r\n  } else if (fillLine.classList.contains('active_tool')) {\r\n    canvas.classList.remove('active_pencil');\r\n    canvas.classList.add('active_fill');\r\n    canvas.classList.remove('active_pipette');\r\n  } else if (pipetteLine.classList.contains('active_tool')) {\r\n    canvas.classList.remove('active_pencil');\r\n    canvas.classList.remove('active_fill');\r\n    canvas.classList.add('active_pipette');\r\n  }\r\n}\r\n\r\n// for drawWithPencil\r\nconst mouse = { x: 0, y: 0 };\r\nlet isMouseDown = false;\r\n\r\n// draw with pencil\r\nfunction drawWithPencil() {\r\n  canvas.addEventListener('mousedown', function (e) {\r\n    if (pencilLine.classList.contains('active_tool')) {\r\n      isMouseDown = true;\r\n      ctx.beginPath();\r\n      mouse.x = e.pageX - this.offsetLeft;\r\n      mouse.y = e.pageY - this.offsetTop;\r\n      ctx.moveTo(mouse.x, mouse.y);\r\n    }\r\n  });\r\n\r\n  canvas.addEventListener('mousemove', function (e) {\r\n    if (pencilLine.classList.contains('active_tool')) {\r\n      if (isMouseDown) {\r\n        mouse.x = e.pageX - this.offsetLeft;\r\n        mouse.y = e.pageY - this.offsetTop;\r\n        ctx.lineTo(mouse.x, mouse.y);\r\n        ctx.strokeStyle = xx;\r\n        ctx.stroke();\r\n      }\r\n    }\r\n  });\r\n\r\n  canvas.addEventListener('mouseup', function (e) {\r\n    if (pencilLine.classList.contains('active_tool')) {\r\n      ctx.beginPath();\r\n\r\n      isMouseDown = false;\r\n      mouse.x = e.pageX - this.offsetLeft;\r\n      mouse.y = e.pageY - this.offsetTop;\r\n      ctx.lineTo(mouse.x, mouse.y);\r\n      ctx.stroke();\r\n      ctx.closePath();\r\n    }\r\n  });\r\n}\r\n\r\n// save current color\r\ncurrent_color.addEventListener('input', chooseCurrentColor);\r\nfunction chooseCurrentColor(event) {\r\n  xx = event.target.value;\r\n}\r\n\r\nprev_color.addEventListener('click', addPrevToCurColor);\r\nfunction addPrevToCurColor() {\r\n  event.preventDefault();\r\n  current_color.value = event.target.value;\r\n  xx = event.target.value;\r\n}\r\n// for prev color\r\ncurrent_color.addEventListener('click', addPrevColor);\r\nfunction addPrevColor(event) {\r\n  prev_color.value = event.target.value;\r\n}\r\n\r\nred_color.addEventListener('click', addPredefinedColor);\r\nblue_color.addEventListener('click', addPredefinedColor);\r\n\r\nfunction addPredefinedColor() {\r\n  event.preventDefault();\r\n  prev_color.value = current_color.value;\r\n}\r\n\r\n\r\nred_color.addEventListener('click', chooseRedColor);\r\nfunction chooseRedColor(event) {\r\n  event.preventDefault();\r\n\r\n  current_color.value = event.target.value;\r\n  xx = event.target.value;\r\n}\r\n\r\nblue_color.addEventListener('click', chooseBlueColor);\r\nfunction chooseBlueColor(event) {\r\n  event.preventDefault();\r\n\r\n  current_color.value = event.target.value;\r\n  xx = event.target.value;\r\n}\r\n\r\n// fill bucket\r\nfunction fillBucket() {\r\n  canvas.addEventListener('click', () => {\r\n    if (fillLine.classList.contains('active_tool')) {\r\n      ctx.beginPath();\r\n      ctx.rect(0, 0, 512, 512);\r\n      ctx.fillStyle = current_color.value;\r\n      curColorFill = current_color.value;\r\n      ctx.fill();\r\n    }\r\n  });\r\n}\r\n\r\n// pipette\r\nfunction getColor() {\r\n  canvas.addEventListener('mousedown', function (e) {\r\n    if (pipetteLine.classList.contains('active_tool')) {\r\n      const pos = findPos(this);\r\n      const x = e.pageX - pos.x;\r\n      const y = e.pageY - pos.y;\r\n      const canv = this.getContext('2d');\r\n      const p = canv.getImageData(x, y, 1, 1).data;\r\n      const hex = `#${(`000000${rgbToHex(p[0], p[1], p[2])}`).slice(-6)}`;\r\n      current_color.value = hex;\r\n    }\r\n  });\r\n\r\n  function findPos(obj) {\r\n    let curLeft = 0; let\r\n      curTop = 0;\r\n    if (obj.offsetParent) {\r\n      do {\r\n        curLeft += obj.offsetLeft;\r\n        curTop += obj.offsetTop;\r\n      } while (obj = obj.offsetParent);\r\n      return { x: curLeft, y: curTop };\r\n    }\r\n    return undefined;\r\n  }\r\n\r\n  function rgbToHex(r, g, b) {\r\n    if (r > 255 || g > 255 || b > 255) throw 'Invalid color component';\r\n    return ((r << 16) | (g << 8) | b).toString(16);\r\n  }\r\n}\r\n\r\n// choose tool on keyboard\r\ndocument.addEventListener('keydown', (e) => {\r\n  if (e.keyCode == 80) {\r\n    // paint pencil\r\n    pencilLine.classList.add('active_tool');\r\n    fillLine.classList.remove('active_tool');\r\n    pipetteLine.classList.remove('active_tool');\r\n    setCursorClass();\r\n    drawWithPencil();\r\n  }\r\n\r\n  if (e.keyCode == 66) {\r\n    // fill bucket\r\n    pencilLine.classList.remove('active_tool');\r\n    fillLine.classList.add('active_tool');\r\n    pipetteLine.classList.remove('active_tool');\r\n    setCursorClass();\r\n    fillBucket();\r\n  }\r\n\r\n  if (e.keyCode == 67) {\r\n    // pipette\r\n    pencilLine.classList.remove('active_tool');\r\n    fillLine.classList.remove('active_tool');\r\n    pipetteLine.classList.add('active_tool');\r\n    setCursorClass();\r\n    getColor();\r\n  }\r\n});\r\n\r\n\r\nloadPicBtn.addEventListener('click', getLinkToImage);\r\nmakeBWBtn.addEventListener('click', greyScale);\r\n\r\nconst img = new Image();\r\nimg.crossOrigin = 'Anonymous';\r\nconst search = document.querySelector('#searchPic');\r\n\r\nfunction getLinkToImage() {\r\n  const baseUrl = 'https://api.unsplash.com/photos/random';\r\n  const queryString = `?query=town,${search.value}`;\r\n  const accessKey = '&client_id=e10169868aa84b3cfd73a2e24b5fb38b499996ce5688121df095d288b7291e8f';\r\n  const url = baseUrl + queryString + accessKey;\r\n\r\n  fetch(url)\r\n    .then((res) => res.json())\r\n    .then((data) => {\r\n      console.log(data.urls.small);\r\n\r\n      ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n\r\n      // check size of img\r\n      img.onload = function () {\r\n        if (img.width === img.height) {\r\n          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);\r\n          console.log('sq');\r\n        } else if (img.width > img.height) {\r\n          ctx.drawImage(img, 0, (canvas.height - img.height) / 2, canvas.width, img.height);\r\n          console.log('hor');\r\n        } else if (img.width < img.height) {\r\n          ctx.drawImage(img, (canvas.width - img.width) / 2, 0, img.width, canvas.height);\r\n          console.log('vert');\r\n        }\r\n        console.log(img.width);\r\n        console.log(img.height);\r\n      };\r\n      img.src = data.urls.small;\r\n    });\r\n}\r\n\r\n\r\nfunction greyScale() {\r\n  if (img.width == 0) {\r\n    alert('click on LOAD to load the picture');\r\n  } else {\r\n    const imgPixels = ctx.getImageData(0, (canvas.height - img.height) / 2, canvas.width, canvas.height);\r\n    for (let y = 0; y < imgPixels.height; y++) {\r\n      for (let x = 0; x < imgPixels.width; x++) {\r\n        const i = (y * 4) * imgPixels.width + x * 4;\r\n        const avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;\r\n        imgPixels.data[i] = avg;\r\n        imgPixels.data[i + 1] = avg;\r\n        imgPixels.data[i + 2] = avg;\r\n      }\r\n    }\r\n    ctx.putImageData(imgPixels, 0, (canvas.height - img.height) / 2, 0, 0, imgPixels.width, imgPixels.height);\r\n    console.log('made gray');\r\n    return canvas.toDataURL();\r\n  }\r\n}\r\n// localstorage\r\nwindow.onbeforeunload = function () {\r\n  console.log('DONE');\r\n  localStorage.setItem(canvas, canvas.toDataURL());\r\n  return false;\r\n};\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const dataURL = localStorage.getItem(canvas);\r\n  const img = new Image();\r\n  img.src = dataURL;\r\n  img.onload = function () {\r\n    ctx.drawImage(img, 0, 0);\r\n  };\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });