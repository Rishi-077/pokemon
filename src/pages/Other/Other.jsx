import { useEffect } from "react";
import { toggleLabel } from "../../services/Redux/LabelSlice";
import { useDispatch } from "react-redux";
import styles from "./Other.module.css";

function Other() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleLabel("Other"));
  }, [dispatch]);
  return (
    <>
      <section className={`${styles.other_container} px-0 container-fluid`}>
        <div className="row">
          <div className="col-12 p-4">
            <h6 className="fs-16 fw-700">Other Content</h6>
          </div>
        </div>
      </section>
    </>
  );
}

export default Other;
