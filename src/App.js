import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

export default function App() {
  const [locations, setLocations] = useState();

  //fetch location
  useEffect(() => {
    const myHeaders = new Headers();
    const myInit = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    };
    const url = "../public/datas.json";
    const fetchData = async () => {
      try {
        const res = await fetch(url, myInit);
        console.log(res);
        const datas = await res.json();
        setLocations(datas);
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
          <Route exact path="/" element={<Home />} />
          <Route path="/a_propos" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}
