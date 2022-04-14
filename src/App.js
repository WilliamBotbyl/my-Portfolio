import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Resume from "./components/Home/Resume/Resume";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === false ? (
        <Router basename={`/${process.env.PUBLIC_URL}`}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                  <About />
                  <Education />
                  <Skills />
                  <Experience />
                  <Projects />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route exact path="/resume" element={<Resume />} />
          </Routes>
        </Router>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
