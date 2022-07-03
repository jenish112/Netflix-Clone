import React from 'react'
import { useState, useEffect } from 'react'
import "./Nav.css"

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      }
      else { handleShow(false); }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix_logo" />
      <img className='nav_avtar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avtar" />
    </div>
  )
}

export default Nav