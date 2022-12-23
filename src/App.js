import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bubble-sort"></Route>
      </Routes>
    </Router>
  );
}

export default App;
