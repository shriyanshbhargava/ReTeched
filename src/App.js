import "./App.css";
import Header from "./Components/Header/Header";
import { Home } from "./Pages/Home";
import Footer from "./Components/Footer/Footer"



function App() {
  return (
    <div className="App bg-white-50">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
export default App;
