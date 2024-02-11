import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import Header from "../../Layouts/Header/Header";
import { useSelector } from "react-redux";
import Other from "../Other/Other";
import { RequireAuth } from "../Login/RequireAuth";

function PageRoute() {
  const open = useSelector((state) => state.sidebar.open);
  return (
    <>
      <Sidebar />
      <Header />
      <main
        style={{
          paddingLeft: open ? 250 : 50,
          paddingTop: 80,
          overflowY: "scroll",
        }}
      >
        <Routes>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/other"
            element={
              <RequireAuth>
                <Other />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default PageRoute;
