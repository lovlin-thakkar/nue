import logo from './logo.svg';
import './App.css';
import Hero from './Hero.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Profile from './Profile.js';
import Home from './Home.js';

function App() {
  return (
	<BrowserRouter>
	    <Routes>
	      <Route path="/" element={<Hero />}/>
	        <Route path="profile" element={<Profile />}/>
		<Route path="home" element={<Home />}/>
	    </Routes>
	</BrowserRouter>
  );
}

export default App;
