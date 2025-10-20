import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Job from './components/Job/Job';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Music from './components/Music/Music';
import Media from './components/Media/Media';
import { FaHome, FaBriefcase, FaLaptopCode, FaCog, FaMusic, FaFilm } from 'react-icons/fa';

function AppContent() {
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const buttons = [
    { id: 'home', label: 'Home', icon: FaHome, route: '/', component: Home },
    { id: 'job', label: 'Job', icon: FaBriefcase, route: '/job', component: Job },
    { id: 'projects', label: 'Projects', icon: FaLaptopCode, route: '/projects', component: Projects },
    { id: 'skills', label: 'Skills', icon: FaCog, route: '/skills', component: Skills },
    { id: 'music', label: 'Music', icon: FaMusic, route: '/music', component: Music },
    { id: 'media', label: 'Media', icon: FaFilm, route: '/media', component: Media },
  ];

  const handleBoxHover = (buttonId) => {
    setActiveButton(buttonId);
    setShowModal(true);
    setIsClosing(false);
  };

  const handleOverlayMouseMove = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsClosing(true);
    }
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setShowModal(false);
        setIsClosing(false);
        setActiveButton(null);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  const handleModalClick = () => {
    const button = buttons.find(b => b.id === activeButton);
    if (button) {
      navigate(button.route);
      setShowModal(false);
      setActiveButton(null);
    }
  };

  const activeButtonData = buttons.find(b => b.id === activeButton);

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#222222' }}>
      {/* Header with max-width container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Header />
      </div>
      
      {/* Circles Grid */}
      <div className="flex items-center justify-center min-h-[calc(100vh-300px)] p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
          {buttons.map((button) => {
            const Icon = button.icon;
            return (
              <div
                key={button.id}
                onMouseEnter={() => handleBoxHover(button.id)}
                className="box-3d bg-white w-40 h-40 rounded-full flex flex-col items-center justify-center cursor-pointer shadow-2xl transition-all duration-500 ease-out hover:shadow-white/50"
                style={{
                  boxShadow: '0 20px 60px rgba(255, 255, 255, 0.3), inset 0 -5px 20px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Icon className="text-gray-800 text-5xl mb-2" />
                <p className="text-gray-800 font-bold text-base">{button.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer with max-width container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Footer />
      </div>

      {/* Modal Overlay and Content */}
      {showModal && activeButtonData && (
        <div 
          className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 ${
            isClosing ? 'animate-fadeOut' : 'animate-fadeIn'
          }`}
          onMouseMove={handleOverlayMouseMove}
        >
          <div 
            ref={modalRef}
            className="rounded-xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-2xl mx-4"
            style={{ backgroundColor: '#2a2a2a' }}
          >
            <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
              {(() => {
                const Icon = activeButtonData.icon;
                return <Icon className="text-4xl text-blue-400" />;
              })()}
              <h2 className="text-3xl font-bold text-white">{activeButtonData.label}</h2>
            </div>
            
            <div className="text-white">
              <activeButtonData.component />
            </div>

            <div className="mt-6 text-center">
              <button 
                onClick={handleModalClick}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
              >
                Enter Full Page
              </button>
              <p className="text-gray-400 text-sm mt-2">Move mouse away to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/job" element={<Job />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/music" element={<Music />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;