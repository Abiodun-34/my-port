import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import Hero from './component/hero.jsx';
import About from './component/about.jsx';
import Work from './component/work.jsx';
import Contact from './component/contact.jsx';
import Resume from './component/resume.jsx';
import Footer from './component/Footer.jsx';

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        {/* Navbar appears on all pages */}
        <Navbar />

        {/* Main content area that changes with routes */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;