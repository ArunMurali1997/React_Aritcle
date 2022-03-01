import Login from "./containers/Login/index";
import Dashboad from "./containers/Dashboad/index";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboad />} />
      </Routes>
    </>
  );
}

export default App;
