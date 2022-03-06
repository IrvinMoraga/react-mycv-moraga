import React from 'react';
import './mainProfile.css';
import Card from '../../shared/Card/Card';
import profileImage from '../../assets/IRDM1x1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMobileScreenButton,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

export default function MainProfile() {
  return (
    <Card>
      <div className='mainProfileContainer'>
        <img src={profileImage} alt='myImage' className='profileImage' />
        <div className='profileInfo'>
          <h1 className='profileHeader headerBig'>IRVIN RANDELL D. MORAGA</h1>
          <h2 className='profileHeader headerSmall'>
            BS Information Technology Student
          </h2>

          <div className='firstLine'>
            <p className='profileBody'>
              <FontAwesomeIcon
                icon={faMobileScreenButton}
                className='profileIcon mobileIcon'
              />
              0917-182-3911
            </p>
            <p className='profileBody'>
              <FontAwesomeIcon
                icon={faLocationDot}
                className='profileIcon locationIcon'
              />
              #11-G Mt. Airy St. Sta Elena Marikina City
            </p>
          </div>
          <p className='profileBody'>
            <FontAwesomeIcon icon={faEnvelope} className='profileIcon' />
            irvinmoraga@gmail.com
          </p>
        </div>
      </div>
    </Card>
  );
}
