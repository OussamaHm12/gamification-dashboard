import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Defis from './pages/Defis';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/defis" element={<Defis />} />
            {/* ajoutez d'autres routes ici si besoin */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
