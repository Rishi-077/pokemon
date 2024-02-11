import styles from "./Header.module.css";
import { useSelector } from "react-redux";

function Header() {
  const open = useSelector((state) => state.sidebar.open);
  return (
    <>
      <header
        className={`${styles.header_container} container-fluid`}
        style={{ left: open ? 250 : 50 }}
      >
        <div className="row px-0 h-100">
          <div className="col-12 px-0 h-100 d-flex align-items-center justify-content-center">
            {!open ? <div className="fs-17 fw-800">Pokemon</div> : ""}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
