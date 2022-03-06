import React from 'react';
import Card from '../../shared/Card/Card';
import './bionote.css';

export default function Bionote() {
  return (
    <Card>
      <div className='bionoteContainer'>
        <h1 className='bionoteHeader'>Bionote</h1>
        <p className='bionoteBody'>
          I am a 4th year Information Technology student from University of
          Santo Tomas, majoring in Web and Mobile Development. I aspire to
          pursue a career in the development part of the industry, preferrably
          in Web Development. As a student in my major, my skills mostly include
          knowledge of different programming languages, such as Java,
          JavaScript, and different web frameworks.
        </p>
        <p className='bionoteBody'>
          I consider myself as someone who often pays much attention to detail,
          I often do my best effort, always looking forward to learn and become
          better. In terms of my hobbies, anything related to technology,
          gaming, and content creation sparks interest in me.
        </p>
      </div>
    </Card>
  );
}
