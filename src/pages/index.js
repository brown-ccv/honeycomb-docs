import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import TableOfContents from "../../components/TableOfContents.jsx";

import styles from "./styles.module.css";

const features = [
  {
    title: "Modular and Configurable",
    imageUrl: "img/undraw_Content_creator_re_pt5b.svg",
    description: (
      <>
        Honeycomb was designed to be modular, composable, easily configured to
        deploy to Linux, Mac, Windows, Browsers, PsiTurk, and more
      </>
    ),
  },
  {
    title: "Packed with automation",
    imageUrl: "img/undraw_User_flow_re_bvfx.svg",
    description: (
      <>
        Honeycomb includes GitHub Actions that build the executables/deployments
        for you.
      </>
    ),
  },
  {
    title: "Based on trusted and mature libraries",
    imageUrl: "img/undraw_Code_review_re_woeb.svg",
    description: (
      <>
        Honeycomb relies on mature libraries such as JSPsych, React and Electron
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>

        <TableOfContents />
      </header>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
