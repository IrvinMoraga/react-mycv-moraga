import React from 'react';
import Card from '../../shared/Card/Card';
import './achievements.css';

export default function Achievements() {
  return (
    <Card>
      <div className='achievementsContainer'>
        <h1 className='achievementsHeader'>Achievements</h1>
        <div className='achievementsBody'>
          <ul className='achievementsList'>
            <li className='achievement'>
              <h3 className='achievementHeader'>
                Dean's Lister 1st Term AY 2021 - 2022
              </h3>
              <p className='achievementDescription'>Semester Average of 1.7</p>
            </li>
            <li className='achievement'>
              <h3 className='achievementHeader'>
                Dean's Lister 2nd Term AY 2020 - 2021
              </h3>
              <p className='achievementDescription'>
                Semester Average of 1.458
              </p>
            </li>
            <li className='achievement'>
              <h3 className='achievementHeader'>
                Dean's Lister 2nd Term AY 2019 - 2020
              </h3>
              <p className='achievementDescription'>Semester Average of 1.7</p>
            </li>
            <li className='achievement'>
              <h3 className='achievementHeader'>
                Eco-Systems (Software Engineering)
              </h3>
              <p className='achievementDescription'>Back-end Developer</p>
            </li>
            <li className='achievement'>
              <h3 className='achievementHeader'>
                TruckMe: A Management App for Trucking Services (Capstone
                Project)
              </h3>
              <p className='achievementDescription'>
                Documentation Manager and Developer
              </p>
            </li>
            <li className='achievement'>
              <h3 className='achievementHeader'>
                TomasinoWeb: Digital Media Organization of University of Santo
                Tomas
              </h3>
              <p className='achievementDescription'>UI/UX Designer</p>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}
