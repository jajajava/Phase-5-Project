import { Route, Routes } from "react-router-dom";
import '../App.css';
import Home from './Home';
import NotFound from './NotFound';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;