import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageRoute from "./pages/PageRoute/PageRoute";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/*" element={<PageRoute />} />
          <Route path="/" element={<Login />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
