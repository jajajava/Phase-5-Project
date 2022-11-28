import { Route, Routes } from "react-router-dom";
import '../App.css';
import Home from './Home';
import NotFound from './NotFound';
import Residential from "./Residential";
import Commercial from "./Commercial";
import Industrial from "./Industrial";
import About from "./About";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/residential' element={<Residential/>} />
      <Route path='/commercial' element={<Commercial/>} />
      <Route path='/industrial' element={<Industrial/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
  );
}

export default App;