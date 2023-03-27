import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profiles/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import State from './redux/State';
import Asside from './components/NavBar/Assides/Asside';
import {addPost} from './redux/State';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <NavBar assideData={State.assides}/>
        <div className='app-content'>
          <Routes>
            <Route path="/" element={<Profile postsData={State.postsData} addPost={addPost} />} />
            <Route path='/profile' element={<Profile postsData={State.postsData} addPost={addPost}/>} />
            <Route path='/messages/*' element={<Dialogs messageData={State.messageData} dialogData={State.dialogData} />} />
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
