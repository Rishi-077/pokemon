import styles from "./Sidebar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { menu } from "./menu";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../../services/Redux/LabelSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const label = useSelector((state) => state.sidebar.label);
  const open = useSelector((state) => state.sidebar.open);

  return (
    <aside className={`${styles.sidebar_container}`}>
      <div className={`${styles.page}`}>
        <div
          className={`${styles.sidebar} ${open ? styles.sidebar__open : ""}`}
        >
          <div
            className={`d-flex align-items-center ${styles.sidebar_header} ${
              open ? "px-2 justify-content-between" : "justify-content-center"
            }`}
          >
            {open ? <div className="fs-17 fw-800">Pokemon</div> : ""}
            <div
              className={`${styles.trigger}`}
              onClick={() => dispatch(toggleOpen())}
            >
              {open ? <FaXmark /> : <GiHamburgerMenu />}
            </div>
          </div>
          {menu.map((d, i) => (
            <>
              <NavLink
                key={i}
                to={d.link}
                className={`${styles.sidebar_position} ${
                  label === d.label
                    ? styles.sidebar_position_active
                    : styles.sidebar_position_inactive
                } d-flex align-items-center`}
              >
                <div>
                  {" "}
                  <FontAwesomeIcon icon={d.icon} className={`${styles.icon}`} />
                </div>

                <span>{d.label}</span>
              </NavLink>
            </>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
