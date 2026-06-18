import { EasyView } from './EasyView';
import { useEffect, useState } from 'react';
import './App.css';

export type Section = 'home' | 'bio' | 'experience' | 'projects';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  // Sync scroll when navbar clicked
  useEffect(() => {
    if (activeSection !== 'home') {
      const el = document.getElementById(activeSection);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const container = document.getElementById('easy-view-container');
      if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <>
      <div className="ui-overlay">
        <nav className="navbar">
          <div className="nav-brand" onClick={() => setActiveSection('home')}>
            Isaac Abell
          </div>
          <div className="nav-links">
            <button
              className={`nav-link ${activeSection === 'bio' ? 'active' : ''}`}
              onClick={() => setActiveSection('bio')}
            >
              Bio
            </button>
            <button
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveSection('experience')}
            >
              Experience
            </button>
            <button
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </button>

          </div>
        </nav>
      </div>
      <EasyView />
    </>
  );
}

export default App;