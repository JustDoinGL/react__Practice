import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profiles/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import store from './redux/State';
import Asside from './components/NavBar/Assides/Asside';
import {addPost} from './redux/State';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <NavBar assideData={store._StateState.assides}/>
        <div className='app-content'>
          <Routes>
            <Route path="/" element={<Profile postsData={store._State.postsData} addPost={store.addPost} />} />
            <Route path='/profile' element={<Profile postsData={store._State.postsData} addPost={store.addPost}/>} />
            <Route path='/messages/*' element={<Dialogs messageData={store._State.messageData} dialogData={store._State.dialogData} />} />
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
