import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Windmill } from '@windmill/react-ui';
import Defis from './pages/Defis';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';

function App() {
  return (
    <Windmill>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/defis" element={<Defis />} />
          </Routes>
        </Layout>
      </Router>
    </Windmill>
  );
}

export default App;
