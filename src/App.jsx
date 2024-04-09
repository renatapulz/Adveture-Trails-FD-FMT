import NavBar from "./assets/components/header";
import "./App.css";
import {Outlet} from "react-router-dom"
import Footer from "./assets/components/footer";

function App() {

  return (
    <div className="container">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
