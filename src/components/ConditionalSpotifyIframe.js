import React from 'react';
import { useLocation } from '@docusaurus/router';
import { useThemeConfig } from '@docusaurus/theme-common';

const SpotifyIframe = ({ modifiedTrackUrl }) => (
  <div>
    <iframe
      style={{ borderRadius: '14px', width: '33%', height: '80px' }}
      src={modifiedTrackUrl}
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
);


const ConditionalSpotifyIframe = () => {
  const location = useLocation();

  const {customFields} = useThemeConfig();
  if (!customFields) {
    return null;
  }
  const trackUrl = customFields.spotifyTrackUrl;

  // Append spotify theme & generator to the trackUrl
  const modifiedTrackUrl = trackUrl + '?utm_source=generator&theme=0';
  
  // Check if the current path starts with /docs
  if (location.pathname.startsWith('/docs')) {
    return <SpotifyIframe modifiedTrackUrl={modifiedTrackUrl}/>;
  }
  
  // Return null if not on a /docs page
  return null;
};

export default ConditionalSpotifyIframe;