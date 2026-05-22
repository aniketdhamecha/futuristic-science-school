import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Dynamic lazy imports can be done, but standard direct imports are more robust 
// for fully static site compilations without chuck split lag.
import Home from '../pages/Home';
import About from '../pages/About';
import Academics from '../pages/Academics';
import Faculty from '../pages/Faculty';
import Gallery from '../pages/Gallery';
import Admissions from '../pages/Admissions';
import Facilities from '../pages/Facilities';
import Events from '../pages/Events';
import Contact from '../pages/Contact';
import Hostel from '../pages/Hostel';
import Protocols from '../pages/Protocols';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsConditions from '../pages/TermsConditions';
import Disclaimer from '../pages/Disclaimer';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Academics />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<Contact />} />
        <Route path="hostel" element={<Hostel />} />
        <Route path="protocols" element={<Protocols />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsConditions />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        {/* Wildcard 404 Catch-all Anomaly */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
