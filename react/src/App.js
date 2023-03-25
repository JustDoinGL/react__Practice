import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profiles/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <NavBar />
        <div className='app-content'>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/messages/*' element={<Dialogs />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
