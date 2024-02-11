import React, { useEffect } from "react";
import { toggleLabel } from "../../services/Redux/LabelSlice";
import { useDispatch } from "react-redux";
import styles from './Home.module.css';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleLabel("Home"));
  }, [dispatch]);
  return (
    <>
      <section className={`${styles.home_container} px-0 container-fluid`}>
        <div className="row">
          <div className="col-12 p-4">
            <h6 className="fs-16 fw-700">Home Content</h6>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
