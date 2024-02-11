import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import PageRoute from "./pages/PageRoute/PageRoute";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/*" element={<PageRoute />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
