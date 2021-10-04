import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Slideshow from '../../components/slideshow/Slideshow';
import Waveform from '../../components/waveform/Waveform';

import projects from '../../assets/projects.json';

import './Project.scss';

const Project = () => {
  const project = projects.find(
    (proj) => proj.id === 'interactive_keyboard',
  );

  const {
    title,
    imageSrc,
    showImage,
    body,
    videoId,
    audioUrl,
    slideshowImgs,
  } = project;

  return (
    <div className="project">
      <div className="project__title">{title}</div>

      <div className="project__main">
        <div className="project__body">
          {/* eslint-disable-next-line react/no-danger */}
          <div className="project__body-text" dangerouslySetInnerHTML={{ __html: body }} />
          {showImage && <img className="project__image" src={imageSrc} alt={`${title}`} />}
        </div>
        <Waveform />

        {videoId
      && (
      <div className="project__video">
        <iframe
          title="Video Player"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      )}
        {audioUrl
      && (
      <iframe
        title="Audio Player"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={audioUrl}
      />
      )}
        {slideshowImgs && <div className="project__slideshow"><Slideshow imageSources={slideshowImgs} /></div>}
      </div>

    </div>
  );
};

export default withRouter(Project);

Project.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
