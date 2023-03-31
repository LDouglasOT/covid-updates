import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './screens/Details';
import Home from './screens/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
