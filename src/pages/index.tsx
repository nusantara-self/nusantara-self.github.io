import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Socials } from '../components/socials';
import Experience from '../components/experience'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from './index.module.css';

/* function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
} */

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <img src="https://github.com/nusantara-self.png" style={{ width: 280, borderRadius: '50%' }} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog/hello-world">
            Discover my blog →
          </Link>
        </div>
        <div className="heroBanner">
          <br></br>
          <br></br>
          <a href="https://linkedin.com/in/bloumefabien"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
          <a style={{ marginLeft: '4%' }} href="https://medium.com/@fabienbloume"><FontAwesomeIcon icon={faMedium} size="3x" /></a>
        </div>
      </div>
    </header >
  );
}


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      //title={`${siteConfig.title}`}
      title={`About me`}
      description="Tech, cybersecurity, travel, life, exploration, journey">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Experience />
      </main>
    </Layout>
  );
}
