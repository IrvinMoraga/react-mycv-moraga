import React from 'react';
import Card from '../../shared/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import './education.css';

export default function Education() {
  return (
    <Card>
      <div className='educationContainer'>
        <h1 className='educationHeader'>Education</h1>
        <div className='educationBody'>
          <div className='school'>
            <p className='schoolName'>
              <FontAwesomeIcon icon={faGraduationCap} className='icon' />
              UNIVERSITY OF SANTO TOMAS
            </p>
            <p className='schoolInfo'>España, Manila</p>
            <p className='schoolInfo'>A.Y. 2018 - present (Batch 2022)</p>
            <p className='schoolInfo'>
              Bachelor of Science, Major in Information Technology
            </p>
            <p className='schoolInfo'>Specialized in Web and App Development</p>
          </div>
          <br />
          <div className='school'>
            <p className='schoolName'>
              <FontAwesomeIcon icon={faGraduationCap} className='icon' />
              MARIKINA CATHOLIC SCHOOL
            </p>
            <p className='schoolInfo'>Sta. Elena, Marikina</p>
            <p className='schoolInfo'>A.Y. 2016-2018</p>
            <p className='schoolInfo'>
              Science, Technology, Engineering, and Mathemathics Strand (STEM)
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
