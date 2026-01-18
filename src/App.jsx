import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home"; // Changé ici
import Housing from "./pages/Housing/Housing";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Housing />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
