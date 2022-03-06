import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import './topNavBar.css';

export default function TopNavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    if (width > 1600) {
      setIsMobile(false);
    }

    window.addEventListener('resize', handleResize);
  }, [width]);

  return (
    <div className={isMobile ? 'topNavBar mobileTopNavBar' : 'topNavBar'}>
      <Link to='/' className='link topNavBarTitle'>
        <h1>My Curriculum Vitae</h1>
      </Link>
      <ul className={isMobile ? 'mobile-topNavBarLinks' : 'topNavBarLinks'}>
        <Link to='/' className='link topNavBarLink hover-underline-animation'>
          <li>BIONOTE</li>
        </Link>
        <Link
          to='/education'
          className='link topNavBarLink hover-underline-animation'
        >
          <li>EDUCATION</li>
        </Link>
        <Link
          to='/skills'
          className='link topNavBarLink hover-underline-animation'
        >
          <li>SKILLS</li>
        </Link>
        <Link
          to='/achievements'
          className='link topNavBarLink hover-underline-animation'
        >
          <li>ACHIEVEMENTS</li>
        </Link>
        <Link
          to='/certifications'
          className='link topNavBarLink hover-underline-animation'
        >
          <li>CERTIFICATIONS</li>
        </Link>
        <Link
          to='/characterReferences'
          className='link topNavBarLink hover-underline-animation'
        >
          <li>CHARACTER REFERENCES</li>
        </Link>
      </ul>
      <button
        className='toggleNavBar'
        onClick={() => {
          setIsMobile(!isMobile);
        }}
      >
        {isMobile ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    </div>
  );
}
