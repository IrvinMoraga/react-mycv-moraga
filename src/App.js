import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavBar from './components/topNavBar/TopNavBar';
import MainProfile from './components/mainProfile/MainProfile';
import Bionote from './pages/bionote/Bionote';
import Education from './pages/education/Education';
import Skills from './pages/skills/Skills';
import Achievements from './pages/achievements/Achievements';
import Certifications from './pages/certifications/Certifications';
import CharacterReferences from './pages/characterReferences/CharacterReferences';
import './app.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className='main-app-container'>
        <TopNavBar />

        <MainProfile />

        <Routes>
          <Route exact path='/' element={<Bionote />} />
          <Route path='/education' element={<Education />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route
            path='/characterReferences'
            element={<CharacterReferences />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
