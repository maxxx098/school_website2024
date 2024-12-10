import React, { useState } from 'react';
import './banner.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const banner = () => {

  const [message, setMessage] = useState(''); // State to hold the input message

  const handleConnectClick = () => {
    if (!message) {
      toast.error('Please enter your message!');
    } else {
      toast.success('Data has been saved, please wait !');
      setMessage(''); 
    }
  };

  return (
    <>
   
      <section className="banner_section" data-aos="fade-zoomIn">
        <div className="banner_container">
          <div className="banner_box">
            <h1 className="banner_header-1">
              Connect with educators to <br /> enhance learning.
            </h1>
            <p className="banner_paragraph">
              Subscribe to our monthly newsletter for tips, free learning <br /> resources and promotions.
            </p>
            <div className="banner">
              <div className="banner_newsletter">
                <input
                  placeholder="Put your message here"
                  className="banner_input"
                  type="email"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} 
                />
                <button className="banner_button" onClick={handleConnectClick}>
                  Subscribe
                </button>
              </div>
              <ToastContainer position="top-right" autoClose={3000} />
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default banner;

