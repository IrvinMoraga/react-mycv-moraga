import React from 'react';
import Card from '../../shared/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faDesktop,
  faDatabase,
  faUserGroup,
  faCommentDots,
  faHouseLaptop,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import './skills.css';

export default function Skills() {
  return (
    <Card>
      <div className='skillsContainer'>
        <h1 className='skillsHeader'>Skills</h1>
        <div className='skillsBody'>
          <div className='skill'>
            <div className='skillIcon'>
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className='skillInfo'>
              <h2 className='skillHeader'>Programming</h2>
              <p>
                Knowledge in Java, JavaScript, React, HTML, CSS, PHP, Python,
                NodeJS
              </p>
            </div>
          </div>
          <div className='skill'>
            <div className='skillIcon'>
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <div className='skillInfo'>
              <h2 className='skillHeader'>Applications</h2>
              <p>
                Experienced in using Microsoft Office, Adobe XD, Adobe
                Photoshop, Android Studio, Eclipse, Visual Studio, VS Code,
                Balsamic, Adobe Lightroom, Android Studio, GitHub
              </p>
            </div>
          </div>
          <div className='skill'>
            <div className='skillIcon'>
              <FontAwesomeIcon icon={faDatabase} />
            </div>
            <div className='skillInfo'>
              <h2 className='skillHeader'>Database Management</h2>
              <p>
                Knowledge using SQL and NoSQL languages (Oracle/MySQL/MongoDB)
              </p>
            </div>
          </div>
          <div className='skill'>
            <div className='skillIcon'>
              <FontAwesomeIcon icon={faUserGroup} />
            </div>
            <div className='skillInfo'>
              <h2 className='skillHeader'>Team Player</h2>
              <p>
                Worked with various groups and organizations consistently
                througout high school and college, being a good collaborator
              </p>
            </div>
          </div>
          <div className='skill'>
            <div className='skillIcon'>
              <FontAwesomeIcon icon={faCommentDots} />
            </div>
            <div className='skillInfo'>
              <h2 className='skillHeader'>Communication</h2>
              <p>
                Excellent verbal and written communication skills both in
                English and Filipino
              </p>
            </div>
          </div>
          <div className='skill'>
            <div className='skillIcon'>
              <FontAwesomeIcon icon={faHouseLaptop} />
            </div>
            <div className='skillInfo'>
              <h2 className='skillHeader'>Adaptability</h2>
              <p>
                Able to work in different work environments, individually or as
                part of a team, can work with minimal supervision and under time
                pressure.
              </p>
            </div>
          </div>
          <div className='skill'>
            <div className='skillIcon'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className='skillInfo'>
              <h2 className='skillHeader'>Detail Oriented</h2>
              <p>
                Organized and efficient, hard-working to produce best quality
                outputs
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
