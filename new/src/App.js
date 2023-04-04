import React from "react";
// import Counnter from "./components/Counter";
// import ClassConter from './components/ClassCounter';
import PostItem from './components/PostItem';
import './styles/app.css'

function App() {
  return (
    <div className="App">
      {/* <Counnter />
      <ClassConter /> */}
      <PostItem post = {{id: 1, name: 'Js', text:'aaa'  }} />
      <PostItem post = {{id: 1, name: 'Js', text:'aaa'  }} />
      <PostItem post = {{id: 1, name: 'Js', text:'aaa'  }} />
    </div>
  );
}

export default App;
