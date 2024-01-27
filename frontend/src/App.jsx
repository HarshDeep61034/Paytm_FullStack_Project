import React from "react";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { BrowserRouter, useNavigate, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Send from "./pages/Send.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send/:to" element={<Send />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
