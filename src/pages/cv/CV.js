import React from 'react';

import './CV.scss';

export default () => (
  <>
    <div className="fullscreen-page">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="page-title"
      >
        CV
      </div>
      <div className="cv__main">
        <div className="cv__section" style={{ marginTop: 0 }}>
          <div className="cv__section-title">Employment</div>
          <div className="cv__item">
            <div className="cv__item-title">BBC</div>
            <div className="cv__role">
              <div className="cv__role-title">
                Software Engineer - BBC Sounds
              </div>
              <div className="cv__role-time">Aug 2021 – Present</div>
              <div className="cv__role-description">
                Software Engineer for BBC Sounds Smart Speakers.
                Developing Software for the BBC Sounds Alexa skill using Node.js,
                TypeScript and AWS Lambda.
              </div>
            </div>
            <div className="cv__role">
              <div className="cv__role-title">
                Software Engineer - BBC Sounds
              </div>
              <div className="cv__role-time">Mar 2021 – Aug 2021</div>
              <div className="cv__role-description">
                Software Engineer for BBC Sounds Mobile Team.
                Worked on the Android and Android Automotive BBC Sounds applications using Kotlin.
                Developed for the BBC Sounds iOS app using Swift.
              </div>
            </div>
            <div className="cv__role">
              <div className="cv__role-title">Software Engineer - BBC R&D</div>
              <div className="cv__role-time">Sep 2020 – Mar 2021</div>
              <div className="cv__role-description">
                Developed user interfaces and APIs for internal machine learning
                based tools for media production within a research context.
                <br />
                My work was demonstrated at the EBU Production Technology
                Seminar 2021.
                <br />
                Technologies Used: JavaScript, Node.JS, React, Python,
                TensorFlow, OpenCV
              </div>
            </div>
            <div className="cv__role">
              <div className="cv__role-title">
                Software Engineer - BBC Voice + AI
              </div>
              <div className="cv__role-time">Mar 2020 – Sep 2020</div>
              <div className="cv__role-description">
                Back-end engineer for the BBC&apos;s audio capabilities (radio
                and podcasts) on voice platforms, including Alexa and Beeb.
                <br />
                Technologies used: TypeScript, JavaScript, AWS Lambda, AWS CDK,
                Alexa Skills Kit
              </div>
            </div>
            <div className="cv__role">
              <div className="cv__role-title">Software Engineer - BBC Home</div>
              <div className="cv__role-time">Sep 2019 – Feb 2020</div>
              <div className="cv__role-description">
                Full Stack Engineer for BBC Food (bbc.co.uk/food) Worked on the
                front-end website and back-end API migration to AWS.
                <br />
                Technologies used: JavaScript, React, SCSS, MySQL, AWS Lambda,
                Amazon RDS, Serverless Framework
              </div>
            </div>
          </div>
          <div className="cv__item">
            <div className="cv__item-title">University of York, AudioLab</div>
            <div className="cv__role">
              <div className="cv__role-title">Undergraduate Researcher</div>
              <div className="cv__role-time">Jun 2018 - Jul 2018</div>
              <div className="cv__role-description">
                Developed proof of concept software used to produce a virtual
                reality audio experience for live performances. Also produced
                Android applications to be used by the performer to control the
                experience. Organised and conducted user testing sessions.
                <br />
                Technologies used: Java, Max, Spat, Android SDK, Android Studio,
                Ableton Live
              </div>
            </div>
          </div>
        </div>
        <div className="cv__section">
          <div className="cv__section-title">Education</div>
          <div className="cv__item">
            <div className="cv__role">
              <div className="cv__role-title">
                BEng (Hons) Electronic Engineering with Music Technology Systems
                - First Class Honours
              </div>
              <div className="cv__role-description">
                Developed knowledge in engineering mathematics and signal
                processing. Covered principals in software engineering,
                including app development. Combined experience in audio
                recording for music and film with acoustic and psychoacoustic
                principals.
                <br />
                In my final year project I produced a virtual reality audio
                listening test in the Unity game engine, used to compare two
                methods of producing virtual reverberation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
