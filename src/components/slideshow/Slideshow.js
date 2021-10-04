import React from 'react';
import PropTypes from 'prop-types';

import './Slideshow.scss';
import { SmallScreen, LargeScreen } from '../utils/DeviceCheck';

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  onLeftClick = () => {
    const { currentIndex } = this.state;
    const { imageSources } = this.props;

    if (currentIndex - 1 === -1) {
      this.setState({ currentIndex: imageSources.length - 1 });
    } else {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };

  onRightClick = () => {
    const { currentIndex } = this.state;
    const { imageSources } = this.props;

    if (currentIndex + 1 === imageSources.length) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  };

  render = () => {
    const { imageSources } = this.props;
    const { currentIndex } = this.state;

    return (
      <>
        <SmallScreen>
          <div className="mobile-slideshow">
            <div className="image-container">
              {imageSources.map((source, index) => <img src={source} alt="ALT" className={index === currentIndex ? 'slideshow__visible' : 'slideshow__hidden'} key={source} />)}
            </div>
            <div className="mobile-slideshow__arrows">
              <button onClick={this.onLeftClick} type="button" className="slideshow__arrow">&#10094;</button>
              <button onClick={this.onRightClick} type="button" className="slideshow__arrow">&#10095;</button>
            </div>
          </div>
        </SmallScreen>
        <LargeScreen>
          <div className="slideshow">
            <button onClick={this.onLeftClick} type="button" className="slideshow__arrow">&#10094;</button>
            <div className="image-container">
              {imageSources.map((source, index) => <img src={source} alt="ALT" className={index === currentIndex ? 'slideshow__visible' : 'slideshow__hidden'} key={source} />)}
            </div>
            <button onClick={this.onRightClick} type="button" className="slideshow__arrow">&#10095;</button>
          </div>
        </LargeScreen>
      </>
    );
  };
}

Slideshow.propTypes = {
  imageSources: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
