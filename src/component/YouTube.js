import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, link = "https://www.youtube.com/embed/" }) => (
  <div className="video-responsive">
    <iframe
      width="553"
      height="380"
      src={`${link}${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded YouTube video"
      aria-label="Embedded YouTube video"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default YoutubeEmbed;
