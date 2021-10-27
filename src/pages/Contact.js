import React from 'react';
import { Helmet } from 'react-helmet';

import Contact from '../components/contact/Contact';

export default () => (
  <>
    <Helmet>
      <title>Contact - Will Cottingham</title>
    </Helmet>
    <div className="fullscreen-page">
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="page-title">Contacts</div>
      <Contact />
    </div>
  </>
);
