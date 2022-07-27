import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import locations from "./datas/locations.json";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home locations={locations} />} />
          <Route path="/home" element={<Home locations={locations} />} />
          <Route path="/accueil" element={<Home locations={locations} />} />
          <Route path="/about" element={<About />} />
          <Route path="/a_propos" element={<About />} />
          <Route
            path="/locations/:id"
            element={<Location locations={locations} />}
          />
          <Route path="notFound" element={<Error />} />
          <Route path="*" element={<Navigate to="/notFound" replace />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}
