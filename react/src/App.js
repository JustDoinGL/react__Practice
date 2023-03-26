import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profiles/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';

let dialogData = [
  { name: 'Andrew', id: '1' },
  { name: 'Semen', id: '2' },
  { name: 'Alex', id: '3' },
  { name: 'Victor', id: '4' },
  { name: 'Sacha', id: '5' },
]

let messageData = [
  { text: 'Hi', id: '1' },
  { text: 'Semen', id: '2' },
  { text: 'Alex', id: '3' },
]

let postsData = [
  { id: 1, name: 'Andrew', text: 'Hello world!', valueLikes: '12' },
  { id: 2, name: 'Alex', text: 'Hi react', valueLikes: '33' },
  { id: 2, name: 'Alex', text: 'Hi react', valueLikes: '33' },
]


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <NavBar />
        <div className='app-content'>
          <Routes>
            <Route path="/" element={<Profile postsData={postsData} />} />
            <Route path='/profile' element={<Profile postsData={postsData} />} />
            <Route path='/messages/*' element={<Dialogs messageData={messageData} dialogData={dialogData} />} />
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
