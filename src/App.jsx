import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar         from './components/Navbar.jsx';
import Footer         from './components/Footer.jsx';
import Home           from './pages/Home.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import Resume         from './pages/Resume.jsx';
import './App.css';

/**
 * App — sets up routing.
 * Navbar and Footer render on every page.
 * AnimatePresence enables page-transition animations.
 */
export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"              element={<Home />}           />
          <Route path="/project/:id"   element={<ProjectDetails />} />
          <Route path="/resume"        element={<Resume />}         />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
