import { Fragment } from "react";
import AboutSection from "./components/Content/AboutSection";
import MainHero from "./components/Content/MainHero";
import ProjectSection from "./components/Content/ProjectSection";
import SkillsSection from "./components/Content/SkillsSection";
import MainHeader from "./components/UI/MainHeader";
import styles from '/Users/enriqueambrocio/Desktop/EnriqueAmbrocio/enrique-ambrocio/src/App.module.css'

function App() {

  return (
    <Fragment>
      <MainHeader />
      <main>
        <MainHero />
        <hr className={styles['hr']} />
        <AboutSection />
        <hr className={styles['hr']} />
        <ProjectSection />
        <hr className={styles['hr']} />
        <SkillsSection />
        <hr className={styles['hr']} />
      </main>
    </Fragment>
  );
}

export default App;
