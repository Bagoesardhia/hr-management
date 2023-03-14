import logo from "./logo.svg";
import "./App.css";

// import Library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Modules
import LoginPages from "./modules/login/pages/loginPages";
import DashboardPages from './modules/dashboard/pages/dashboardPages'
import HomeSetupPages from './modules/setup/pages/dashboard/homeSetupPages'
import SetupEmployee from "./modules/setup/pages/setupEmployee/setupEmployee";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPages />} />
          <Route path="/dashboard" element={<DashboardPages />} />
          <Route path="/setup" element={<HomeSetupPages />} />
          <Route path="/setupEmpl" element={<SetupEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
