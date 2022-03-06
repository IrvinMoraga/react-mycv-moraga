import React from 'react';
import Card from '../../shared/Card/Card';
import './certifications.css';

export default function Certifications() {
  return (
    <Card>
      <div className='certificationsContainer'>
        <h1 className='certificationsHeader'>Certifications</h1>
        <div className='certificationsBody'>
          <ul className='certificationsList'>
            <li className='certification'>
              <h3 className='certificationHeader'>
                The Complete 2021 Web Developer Bootcamp (Udemy)
              </h3>
              <p className='certificationDescription'>May 2021</p>
            </li>
            <li className='certification'>
              <h3 className='certificationHeader'>
                Complete Python Mastery (Code with Mosh)
              </h3>
              <p className='certificationDescription'>June 2020</p>
            </li>
            <li className='certification'>
              <h3 className='certificationHeader'>Asurion Technology Summit</h3>
              <p className='certificationDescription'>October 2021</p>
            </li>
            <li className='certification'>
              <h3 className='certificationHeader'>
                Robot Framework Training - Fligno Software Philippines
              </h3>
              <p className='certificationDescription'>February 2022</p>
            </li>
            <li className='certification'>
              <h3 className='certificationHeader'>
                PHP / Laravel Training - Fligno Software Philippines
              </h3>
              <p className='certificationDescription'>February 2022</p>
            </li>
            <li className='certification'>
              <h3 className='certificationHeader'>
                AWS Basics Training - Fligno Software Philippines
              </h3>
              <p className='certificationDescription'>March 2022</p>
            </li>
            <li className='certification'>
              <h3 className='certificationHeader'>
                XPERIENCE: Career Building Webinar
              </h3>
              <p className='certificationDescription'>April 2021</p>
            </li>
            <li className='certification'>
              <h3 className='certificationHeader'>
                AceIT: UI/UX Strategies Webinar
              </h3>
              <p className='certificationDescription'>April 2021</p>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}
