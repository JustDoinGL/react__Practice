import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profiles/Profile';



function App() {
  return (
    <div className = "app">
      <Header />
      <NavBar />
      <div className='app-content'>
      {/* <Profile /> */}
      <Dialogs />
      </div>
    </div>
  );
}

export default App;
