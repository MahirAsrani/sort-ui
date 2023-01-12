import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useColorMode } from '@chakra-ui/react';
import Home from './pages/Home';
import Bubble from './pages/Bubble';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bubble-sort" element={<Bubble />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
