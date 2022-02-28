import logo from './logo.svg';
import './App.css';
import Hero from './Hero.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Profile from './Profile.js';

function App() {
  return (
	<BrowserRouter>
	    <Routes>
	      <Route path="/" element={<Hero />}/>
	        <Route path="profile" element={<Profile />}/>
	    </Routes>
	</BrowserRouter>
  );
}

export default App;
