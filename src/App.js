import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Movies from "./Page/Movies"
import Cinema from './Page/Cinema';
import Schedule from './Page/Schedule';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/cinema" element={<Cinema />} />
      <Route path="/schedule" element={<Schedule />} />
      
        
    </Routes>
  );
}

export default App;
