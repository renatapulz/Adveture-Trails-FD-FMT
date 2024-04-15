import NavBar from "./assets/components/header";
import "./App.css";
import {Outlet} from "react-router-dom"
import Footer from "./assets/components/footer";
import {TrilhasContextProvider} from "./hooks/TrilhasContext";

function App() {

  return (
    <TrilhasContextProvider>
      <NavBar />
      <Outlet />
      <Footer />
    </TrilhasContextProvider>
  );
}

export default App;
