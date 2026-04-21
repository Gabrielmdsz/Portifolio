import About from "./components/about"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Header from "./components/header/header"
import Home from "./components/hero/hero"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/skills"


function App() {


  return (
    <>
    <Header/>
    <Home/>
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
