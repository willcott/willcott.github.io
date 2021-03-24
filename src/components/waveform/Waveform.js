import React from 'react';

import './Waveform.scss';

export default () => (
  <>
    <div className="waveform" data-aos="out" data-aos-anchor-placement="bottom-center">
      {Array(100)
        .fill()
        .map(() => (
          <div
            className="waveform__bar"
            style={{
              '--max-height': `${Math.floor(Math.random() * 100) + 50}px`,
              '--min-height': `${Math.floor(Math.random() * 100) + 50}px`,
              animationDuration: `${Math.floor(Math.random() * 4) + 2}s`,
              height: `${Math.floor(Math.random() * 100) + 50}px`,
            }}
            key={Math.random()}
          />
        ))}
    </div>
  </>
);
