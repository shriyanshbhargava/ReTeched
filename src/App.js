import "./App.css";
import Header from "./Components/Header/Header";
import { Home } from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Locate } from "./Pages/Locate";
import { AboutUs } from "./Pages/AboutUs";

function App() {
  return (
    <div className="App bg-white-50">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Locate" component={<Locate />} />
          <Route path="/AboutUs" component={<AboutUs />} />

        </Routes>
        <Header />

        <Footer />
      </Router>
    </div>
  );
}
export default App;
