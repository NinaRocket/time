import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      {/* <Route exact path="/" component={Home} /> */}
    </BrowserRouter>
  );
}

export default App;
