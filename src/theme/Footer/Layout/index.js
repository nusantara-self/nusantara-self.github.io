import React from 'react';
import clsx from 'clsx';
import ConditionalSpotifyIframe from '../../../components/ConditionalSpotifyIframe';


export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="footer__spotify-embed" style={{ textAlign: 'center', marginTop: '0'}}>
        <ConditionalSpotifyIframe />
      </div>
      <div className="footer__bottom text--center">
        {copyright}
      </div>
      {/* <div className="container container-fluid" >
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div> */}
    </footer>
  );
}
