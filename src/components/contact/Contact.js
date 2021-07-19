import React from 'react';

import { SmallScreen, LargeScreen } from '../utils/DeviceCheck';
import Toast from '../toast/Toast';

import './Contact.scss';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
    };
  }

  copyText = (text) => {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.value = text;
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    this.setState({ showToast: true });

    setTimeout(() => { this.setState({ showToast: false }); }, 3000);
  };

  openLink = (link) => {
    const a = document.createElement('a');
    a.href = link;
    a.click();
  };

  handleClickOrEnter = (event, callback) => {
    if (event.key === 'Enter' || event.nativeEvent.type === 'click') {
      callback();
    }
  };

  render = () => {
    const { showToast } = this.state;

    return (
      <>
        <SmallScreen>
          <Toast message="Copied To Clipboard" show={showToast} />
          <div className="mobile-contacts-list" data-aos="zoom-in">
            <div
              className="contacts-list__contact"
              role="button"
              onClick={(event) => this.handleClickOrEnter(event, () => this.copyText('william.h.cottingham@gmail.com'))}
              onKeyDown={(event) => this.handleClickOrEnter(event, () => this.copyText('william.h.cottingham@gmail.com'))}
              tabIndex={0}
            >
              <i className="fa fa-envelope" />
              <div className="contacts-list__contact-name">
                Email
              </div>
            </div>

            <div
              className="contacts-list__contact"
              role="button"
              onClick={(event) => this.handleClickOrEnter(event, () => this.openLink('https://github.com/willcott'))}
              onKeyDown={(event) => this.handleClickOrEnter(event, () => this.openLink('https://github.com/willcott'))}
              tabIndex={0}
            >
              <i className="fa fa-github" />
              <div className="contacts-list__contact-name">
                Github
              </div>
            </div>

            <div
              className="contacts-list__contact"
              role="button"
              onClick={(event) => this.handleClickOrEnter(event, () => this.openLink('https://www.linkedin.com/in/will-cottingham-82b278193/'))}
              onKeyDown={(event) => this.handleClickOrEnter(event, () => this.openLink('https://www.linkedin.com/in/will-cottingham-82b278193/'))}
              tabIndex={0}
            >
              <i className="fa fa-linkedin" />
              <div className="contacts-list__contact-name">
                LinkedIn
              </div>
            </div>

          </div>
        </SmallScreen>
        <LargeScreen>
          <Toast message="Copied To Clipboard" show={showToast} />
          <div className="contacts-list">
            <div
              data-aos="zoom-in"
              className="contacts-list__contact"
              role="button"
              onClick={(event) => this.handleClickOrEnter(event, () => this.copyText('william.h.cotingham@gmail.com'))}
              onKeyDown={(event) => this.handleClickOrEnter(event, () => this.copyText('william.h.cotingham@gmail.com'))}
              tabIndex={0}
            >
              <div className="contacts-list__contact-container">
                <i className="fa fa-envelope" />
                <div className="contacts-list__contact-name">
                  Email
                </div>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              className="contacts-list__contact"
              role="button"
              onClick={(event) => this.handleClickOrEnter(event, () => this.openLink('https://github.com/willcott'))}
              onKeyDown={(event) => this.handleClickOrEnter(event, () => this.openLink('https://github.com/willcott'))}
              tabIndex={0}
            >
              <div className="contacts-list__contact-container">
                <i className="fa fa-github" />
                <div className="contacts-list__contact-name">
                  Github
                </div>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              className="contacts-list__contact"
              role="button"
              onClick={(event) => this.handleClickOrEnter(event, () => this.openLink('https://www.linkedin.com/in/will-cottingham-82b278193/'))}
              onKeyDown={(event) => this.handleClickOrEnter(event, () => this.openLink('https://www.linkedin.com/in/will-cottingham-82b278193/'))}
              tabIndex={0}
            >
              <div className="contacts-list__contact-container">
                <i className="fa fa-linkedin" />
                <div className="contacts-list__contact-name">
                  LinkedIn
                </div>
              </div>
            </div>
          </div>
        </LargeScreen>
      </>
    );
  }
}
