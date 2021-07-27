/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { LargerThan500Screen } from '../utils/DeviceCheck';

import './Waveform.scss';

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);

    const AudioContext = window.AudioContext || window.webkitAudioContext;

    const audioContext = new AudioContext();

    this.state = { audioContext };
  }

  componentDidMount = () => {
    const { audioContext } = this.state;

    document.addEventListener('keydown', (event) => {
      if (event.repeat) return;

      switch (event.key) {
        case 'a':
          this.onKeyPress(event, 261.63);
          this.setPressedClass('c');
          break;
        case 's':
          this.onKeyPress(event, 293.66);
          this.setPressedClass('d');
          break;
        case 'd':
          this.onKeyPress(event, 329.63);
          this.setPressedClass('e');
          break;
        case 'f':
          this.onKeyPress(event, 349.23);
          this.setPressedClass('f');
          break;
        case 'g':
          this.onKeyPress(event, 392);
          this.setPressedClass('g');
          break;
        case 'h':
          this.onKeyPress(event, 440);
          this.setPressedClass('a');
          break;
        case 'j':
          this.onKeyPress(event, 493.88);
          this.setPressedClass('b');
          break;
        case 'w':
          this.onKeyPress(event, 277.18);
          this.setPressedClass('c#');
          break;
        case 'e':
          this.onKeyPress(event, 311.13);
          this.setPressedClass('d#');
          break;
        case 't':
          this.onKeyPress(event, 370);
          this.setPressedClass('f#');
          break;
        case 'y':
          this.onKeyPress(event, 415.30);
          this.setPressedClass('g#');
          break;
        case 'u':
          this.onKeyPress(event, 466.16);
          this.setPressedClass('a#');
          break;
        default: break;
      }
    });

    document.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'a':
          this.removePressedClass('c');
          break;
        case 's':
          this.removePressedClass('d');
          break;
        case 'd':
          this.removePressedClass('e');
          break;
        case 'f':
          this.removePressedClass('f');
          break;
        case 'g':
          this.removePressedClass('g');
          break;
        case 'h':
          this.removePressedClass('a');
          break;
        case 'j':
          this.removePressedClass('b');
          break;
        case 'w':
          this.removePressedClass('c#');
          break;
        case 'e':
          this.removePressedClass('d#');
          break;
        case 't':
          this.removePressedClass('f#');
          break;
        case 'y':
          this.removePressedClass('g#');
          break;
        case 'u':
          this.removePressedClass('a#');
          break;
        default: break;
      }
    });

    const analyser = audioContext.createAnalyser();

    this.setState({ analyser });

    const canvas = document.querySelector('.visualizer');

    if (!canvas) {
      return;
    }

    const canvasCtx = canvas.getContext('2d');

    function visualize() {
      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;

      analyser.fftSize = 2048;
      const bufferLength = analyser.fftSize;

      const dataArray = new Uint8Array(bufferLength);

      canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

      const draw = () => {
        requestAnimationFrame(draw);

        analyser.getByteTimeDomainData(dataArray);

        canvasCtx.fillStyle = 'rgb(28,28,28)';
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        canvasCtx.lineWidth = 4;
        canvasCtx.strokeStyle = 'rgb(255,255,255)';

        canvasCtx.beginPath();

        const sliceWidth = (WIDTH * 1.0) / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i += 1) {
          const v = dataArray[i] / 128.0;
          const y = (v * HEIGHT) / 2;

          if (i === 0) {
            canvasCtx.moveTo(x, y);
          } else {
            canvasCtx.lineTo(x, y);
          }

          x += sliceWidth;
        }

        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
      };

      draw();
    }

    analyser.connect(audioContext.destination);

    visualize();
  }

  setPressedClass = (id) => {
    const elem = document.getElementById(id);

    elem.classList.add('pressed');
  }

  removePressedClass = (id) => {
    const elem = document.getElementById(id);

    elem.classList.remove('pressed');
  }

  onKeyPress = (event, frequency) => {
    const { audioContext, analyser } = this.state;

    if (event.target.classList.contains('key')) {
      event.target.classList.add('pressed');
    }

    const oscillatorNode = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillatorNode.connect(gainNode);
    gainNode.connect(analyser);
    gainNode.gain.setValueAtTime(1, audioContext.currentTime);

    // Elec Piano fourier series
    const imag = new Float32Array([1, 0.1, 0.32, 0.06, 0.05, 0.04, 0]);
    const real = new Float32Array(imag.length);

    const wave = audioContext.createPeriodicWave(real, imag, { disableNormalization: true });

    oscillatorNode.setPeriodicWave(wave);

    oscillatorNode.frequency.value = frequency;
    oscillatorNode.start();
    gainNode.gain.linearRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
    oscillatorNode.stop(audioContext.currentTime + 0.6);
  };

  onKeyUp = (event) => {
    event.target.classList.remove('pressed');
  }

  render = () => (
    <LargerThan500Screen>
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="container">
        <div className="instructions">
          <div className="title">Interactive keyboard.</div>
          <div className="content">
            Use the keyboard or click on the keys to play.
            <br />
            <div className="small">
              Made using the Web Audio API, more projects below.
            </div>
          </div>
        </div>
        <canvas className="visualizer" width="640" height="100" />
        <div className="keyboard">
          <div className="black">
            <div className="gap" />
            <div className="key" id="c#" onMouseDown={(event) => this.onKeyPress(event, 277.18)} onMouseUp={(event) => this.onKeyUp(event)}>W</div>
            <div className="key" id="d#" onMouseDown={(event) => this.onKeyPress(event, 311.13)} onMouseUp={(event) => this.onKeyUp(event)}>E</div>
            <div className="gap" />
            <div className="gap" />
            <div className="key" id="f#" onMouseDown={(event) => this.onKeyPress(event, 370)} onMouseUp={(event) => this.onKeyUp(event)}>T</div>
            <div className="key" id="g#" onMouseDown={(event) => this.onKeyPress(event, 415.30)} onMouseUp={(event) => this.onKeyUp(event)}>Y</div>
            <div className="key" id="a#" onMouseDown={(event) => this.onKeyPress(event, 466.16)} onMouseUp={(event) => this.onKeyUp(event)}>U</div>
          </div>
          <div className="white">
            <div className="key" id="c" onMouseDown={(event) => this.onKeyPress(event, 261.63)} onMouseUp={(event) => this.onKeyUp(event)}>A</div>
            <div className="key" id="d" onMouseDown={(event) => this.onKeyPress(event, 293.66)} onMouseUp={(event) => this.onKeyUp(event)}>S</div>
            <div className="key" id="e" onMouseDown={(event) => this.onKeyPress(event, 329.63)} onMouseUp={(event) => this.onKeyUp(event)}>D</div>
            <div className="key" id="f" onMouseDown={(event) => this.onKeyPress(event, 349.23)} onMouseUp={(event) => this.onKeyUp(event)}>F</div>
            <div className="key" id="g" onMouseDown={(event) => this.onKeyPress(event, 392)} onMouseUp={(event) => this.onKeyUp(event)}>G</div>
            <div className="key" id="a" onMouseDown={(event) => this.onKeyPress(event, 440)} onMouseUp={(event) => this.onKeyUp(event)}>H</div>
            <div className="key" id="b" onMouseDown={(event) => this.onKeyPress(event, 493.88)} onMouseUp={(event) => this.onKeyUp(event)}>J</div>
          </div>
        </div>
      </div>
    </LargerThan500Screen>
  )
}
