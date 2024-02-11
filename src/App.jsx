import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import PageRoute from "./pages/PageRoute/PageRoute";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFount/NotFound";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route element={<NotFound />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PageRoute />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
