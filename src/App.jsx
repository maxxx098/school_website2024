import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import  AOS  from "aos";
import 'aos/dist/aos.css'
import Home from './pages/home/home.jsx';
import Navigation from './common/navigation/header/Header';
import Footer from './common/footer/footer.jsx';
import About from './pages/about/about.jsx'
import Services from './pages/services/services.jsx'
import Classes from "./pages/classes/classes.jsx";
import Blog from "./pages/blog/blog.jsx";
import Classes_1 from './pages/classes_2/classes.jsx'
import Classes_2 from './pages/classes_3/classes.jsx'
import Booking from './pages/book/booking.jsx'
import BookingPage from './pages/book/booking_page/booking_page_2.jsx'
import CelpipGeneralClass from './pages/book/booking_content/CELPIP General Class/booking.jsx'
import Contact from './pages/contact/contact.jsx'
import IeltsGeneralClass from './pages/book/booking_content/IELTS General Preparation/booking.jsx'
import IeltsGeneralPrepClass from './pages/book/booking_content/IELTS General Prep Class/booking.jsx'
import IeltsListeningClass from './pages/book/booking_content/IELTS Listening Master Class/booking.jsx'
import IeltsWritingMasterClass from './pages/book/booking_content/IELTS Writing Master Class/booking.jsx'
import ToeflGeneralClass from './pages/book/booking_content/TOEFL General Class/booking.jsx'
import BackToTopButton from './pages/backToTopButton/BackToTopButton.jsx'
import PrivacyPage from './pages/privacy @ policy/privacy_page.jsx'
import TermsAndConditions from './pages/terms and conditions/Conditions.jsx'
function App() {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []); 
  return (
    <Router>
      <div id="top"></div>   {/* ID for BackToTop */}
      <BackToTopButton/>
      <MainContent  />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();  
  const isHomepage = location.pathname === '/';
  return (
    <div data-aos="fade-zoomIn"  className={`main-container ${isHomepage ? 'has-background' : ''}`} style={isHomepage ?  {backgroundImage: ''} : {}}>
      <Navigation />
     
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes_1" element={<Classes_1 />} />
        <Route path="/classes_2" element={<Classes_2 />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact/>} />

         {/* This is a Routes for Booking Page */}
         <Route path="/booking" element={<Booking />} />
         <Route path="/booking_page" element={<BookingPage />} />
         <Route path="/celpip_general_class" element={<CelpipGeneralClass/>} />
         <Route path="/ielts_general_preparation" element={<IeltsGeneralClass/>} />
         <Route path="/ielts_general_pre_class" element={<IeltsGeneralPrepClass/>} />
         <Route path="/ielts_listening_class" element={<IeltsListeningClass/>} />
         <Route path="/ielts_writing_master_class" element={<IeltsWritingMasterClass/>} />
         <Route path="/toefl_general_class" element={<ToeflGeneralClass/>} />

          {/* This is a Routes for Footer Links */}
          <Route path="/privacy_page" element={<PrivacyPage/>} />
          <Route path="/terms_and_conditions" element={<TermsAndConditions/>} />
           
      </Routes>
        <Footer/>
        
    </div>
  );
}

export default App;


