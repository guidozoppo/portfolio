import { Footer } from "../Footer";
import { Header } from "../Header";
import { HomePage } from "../MainPage/HomePage";
import { About } from "../AboutSection/About"
import { Projects } from "../pages/Projects"
import { Experience } from "../ExperiencePage/Experience.jsx";

export function Home () {
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}