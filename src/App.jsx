import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';

function App() {
 
  return (
    <>
     <div id="container">
     <div id="navbar">
        <Link to ="/">{<h1>Home</h1>}</Link>
        <Link to = "/Blue">{<h1>Blue</h1>}</Link>
        <Link to = "/Red">{<h1>Red</h1>}</Link>
        </div>

      <div id="main-section">
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/Blue" element = {<Blue/>}></Route>
          <Route path = "/Red" element = {<Red/>}></Route>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
