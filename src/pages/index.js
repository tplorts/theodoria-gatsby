import React from "react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import Layout from "../components/layout"
import MapMyRepsLogo from "../components/MapMyRepsLogo"
import SEO from "../components/seo"
import styles from "./index.module.css"

const ICON_SIZE = 30

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section>
      <div className={styles.title}>
        <h1>Ted Lorts</h1>
        <h2>Senior Software Developer</h2>
        <h3>Web & Mobile, Full Stack</h3>
      </div>
      <div className={styles.links}>
        <a href="mailto:contact@theodoria.software">
          <FaEnvelope size={ICON_SIZE} />
        </a>
        <a href="https://github.com/tplorts">
          <FaGithub size={ICON_SIZE} />
        </a>
        <a href="https://www.linkedin.com/in/ted-lorts-908a9584/">
          <FaLinkedin size={ICON_SIZE} />
        </a>
      </div>
    </section>

    <section>
      <h3>Recent Work</h3>
      <ul className={styles.projects}>
        <li>
          <a href="http://mapmyreps.us" className={styles.MapMyReps}>
            <MapMyRepsLogo />
          </a>
          <p>
            A clean & simple interactive map view of the USA to clearly show
            each state's Senators and Representatives, along with details and
            links for each Congressperson. Built with React.
          </p>
        </li>
        <li>
          <a
            href="http://word-search.theodoria.software"
            className={styles.WordSearch}
          >
            <h4>Word Search</h4>
          </a>
          <p>
            Automatically generates a word search given the desired grid size
            and a list of words. It can then be played in the browser. Built
            with Angular.
          </p>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
