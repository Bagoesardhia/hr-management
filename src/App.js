import logo from "./logo.svg";
import "./App.css";

// import Library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Modules
import LoginPages from "./modules/login/pages/loginPages";
import RegisterPages from "./modules/login/pages/registerPages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPages />} />
          <Route path="/register" element={<RegisterPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
