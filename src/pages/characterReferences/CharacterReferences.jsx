import React from 'react';
import Card from '../../shared/Card/Card';
import './characterReferences.css';

export default function CharacterReferences() {
  return (
    <Card>
      <div className='characterReferencesContainer'>
        <h1 className='characterReferencesHeader'>Character References</h1>
        <div className='characterReferencesBody'>
          <ul className='characterReferencesList'>
            <li className='characterReference'>
              <h3 className='characterReferenceHeader'>
                Asst. Prof Rochelle Lynn L. Lopez, MSCS
              </h3>
              <p className='characterReferenceDescription'>
                Department Chair, Information Technology
              </p>
              <p className='characterReferenceDescription'>
                University of Santo Tomas
              </p>
              <p className='characterReferenceDescription'>
                rllopez@ust.edu.ph
              </p>
            </li>
            <li className='characterReference'>
              <h3 className='characterReferenceHeader'>
                Asst. Prof Noel E. Estrella, DIT
              </h3>
              <p className='characterReferenceDescription'>Professor</p>
              <p className='characterReferenceDescription'>
                University of Santo Tomas
              </p>
              <p className='characterReferenceDescription'>
                neestrella@ust.edu.ph
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}
