import "./App.css";
import Header from "./components/Header/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar.js"
import Dashboard from "./components/Dashboard/Dashboard.js";


function App() {
  return (
    <Router>
     <Dashboard/>


    </Router>
  );
}

export default App;
