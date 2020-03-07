const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let hasBeenClicked = false;
let everClicked = false;
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const muteNode = audioCtx.createGain();
muteNode.connect(audioCtx.destination);
muteNode.gain.setValueAtTime(1, audioCtx.currentTime);

// create Oscillator node

const nodes = [];
let text;
setTimeout(() => {
  if (!everClicked && canvas.width > 900) {
    text = document.createElement("p");
    text.classList = "animated-text";
    text.innerHTML = "Click to Play";
    body.appendChild(text);
  }
}, 2000);

const run = () => {
  clearCanvas();

  checkText();

  update();

  drawNodes();
  // drawLines();

  setTimeout(requestAnimationFrame(run), 1000 / 60);
};

requestAnimationFrame(run);

window.onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const checkText = () => {
  if (everClicked) {
    if (text) text.style.display = "none";
  }
};

const canvasClicked = e => {
  hasBeenClicked = true;
  if (!everClicked) everClicked = true;
  var x;
  var y;

  xMousePos = e.clientX;
  yMousePos = e.clientY;

  var rect = canvas.getBoundingClientRect();

  x = xMousePos - parseInt(rect.left);
  y = yMousePos - parseInt(rect.top);

  addNode(x, y);
};

const addNode = (x, y) => {
  for (const node of nodes) {
    if (
      distanceBetween(node.x + node.xOffset, node.y + node.yOffset, x, y) < 10
    ) {
      node.movable = true;
      return;
    }
  }

  var oscillator = audioCtx.createOscillator();
  var gain = audioCtx.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(
    (y / canvas.height) * 770 + 110,
    audioCtx.currentTime
  ); // value in hertz
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
  oscillator.connect(gain);

  oscillator.start();

  var panner = audioCtx.createStereoPanner();
  panner.pan.setValueAtTime(
    (x - canvas.width / 2) / canvas.width,
    audioCtx.currentTime
  );

  gain.connect(panner);

  panner.connect(muteNode);

  nodes.push({
    x,
    y,
    xOffset: 0,
    yOffset: 0,
    oscillator,
    opacity: 500,
    gain,
    panner,
    movable: true
  });
};

const mouseMove = e => {
  var x;
  var y;

  xMousePos = e.clientX;
  yMousePos = e.clientY;

  var rect = canvas.getBoundingClientRect();

  x = xMousePos - parseInt(rect.left);
  y = yMousePos - parseInt(rect.top);

  if (hasBeenClicked) {
    for (const node of nodes) {
      if (node.movable) {
        node.x = x;
        node.y = y;
      }
    }
  }
};

const mouseUp = () => {
  if (hasBeenClicked) {
    for (const node of nodes) {
      node.movable = false;
    }
    hasBeenClicked = false;
  }
};

const update = () => {
  for (const node of nodes) {
    if (node.xOffset > 5) {
      node.xOffset -= 1;
    } else if (node.xOffset < -5) {
      node.xOffset += 1;
    } else {
      node.xOffset += randomDirectionUnit();
    }

    if (node.yOffset > 5) {
      node.yOffset -= 1;
    } else if (node.yOffset < -5) {
      node.yOffset += 1;
    } else {
      node.yOffset += randomDirectionUnit();
    }

    node.oscillator.detune.setValueAtTime(
      node.y + node.yOffset,
      audioCtx.currentTime
    );

    node.panner.pan.setValueAtTime(
      (node.x - canvas.width / 2) / canvas.width,
      audioCtx.currentTime
    );

    node.opacity -= 1;
    node.gain.gain.setValueAtTime(
      node.gain.gain.value - 0.0001,
      audioCtx.currentTime
    );
    if (node.gain.gain.value < 0) {
      node.oscillator.stop();
    }
    if (node.opacity < 0) {
      nodes.shift();
    }
  }
};

const drawNodes = () => {
  for (const node of nodes) {
    ctx.beginPath();
    ctx.arc(node.x + node.xOffset, node.y + node.yOffset, 5, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(0,0,0,${node.opacity / 500})`;
    ctx.fill();

    for (const secondaryNode of nodes) {
      const rect = canvas.getBoundingClientRect();
      const distance = distanceBetweenNodes(node, secondaryNode);

      const opacity =
        1 -
        (distance /
          Math.pow(Math.pow(rect.height, 2) + Math.pow(rect.width, 2), 0.5)) *
          2;

      ctx.beginPath();
      ctx.moveTo(node.x + node.xOffset, node.y + node.yOffset);
      ctx.lineTo(
        secondaryNode.x + secondaryNode.xOffset,
        secondaryNode.y + secondaryNode.yOffset
      );

      ctx.strokeStyle = `rgba(0,0,0,${(node.opacity + secondaryNode.opacity) /
        1000 -
        opacity / 2})`;
      ctx.stroke();
      ctx.strokeStyle = `rgba(0,0,0,1)`;
    }
  }
};

const drawLines = () => {
  for (const node of nodes) {
    for (const secondaryNode of nodes) {
      ctx.beginPath();
      ctx.moveTo(node.x, node.y);
      ctx.lineTo(secondaryNode.x, secondaryNode.y);
      ctx.stroke();
    }
  }
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.stroke();
};

function makeDistortionCurve(amount) {
  var k = typeof amount === "number" ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for (; i < n_samples; ++i) {
    x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

const randomDirectionUnit = () =>
  Math.round(Math.random()) === 1 ? 0.25 : -0.25;

const distanceBetweenNodes = (node1, node2) =>
  distanceBetween(
    node1.x + node1.xOffset,
    node1.y + node1.yOffset,
    node2.x + node2.xOffset,
    node2.y + node2.yOffset
  );

const distanceBetween = (x1, y1, x2, y2) =>
  Math.pow(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2), 0.5);
