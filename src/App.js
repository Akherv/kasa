import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [locations, setLocations] = useState();

  //fetch location
  useEffect(() => {
    const url = "./datas/locations.json";
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const datas = await res.json();
        setLocations(datas);
        //console.log(datas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home locations={locations} />} />
          <Route path="/a_propos" element={<About />} />
          <Route
            path="/locations/:id"
            element={<Location locations={locations} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}
