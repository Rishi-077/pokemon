import styles from "./Login.module.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiLock } from "react-icons/fi";

function Login() {
  return (
    <>
      <section className={`${styles.login_container} container-fluid`}>
        <div className={`row h-100`}>
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className={`${styles.card} card`}>
              <div className={`${styles.card_body} card_body`}>
                <div className="text-center">
                  <h3 className="fs-25 fw-700 mb-4">Pokemon</h3>
                  <div className="fs-12 fw-500 dark-text mb-4">
                    Don&apos;t have an account yet?{" "}
                    <span className="blue-text fs-12 fw-500">Sign Up</span>
                  </div>
                </div>
                <div>
                  <form>
                    <div className="mb-4">
                      <label>
                        <span className="text-danger">
                          {/* <FaStarOfLife className="fs-12"/> */}*
                        </span>
                        <span className="fs-13 fw-500">Email</span>
                      </label>
                      <div
                        className={`${styles.login_input} d-flex align-items-center justify-content-start`}
                      >
                        <div>
                          <MdOutlineMailOutline
                            className="blue-text fs-20 ms-2"
                            style={{ marginBottom: 2 }}
                          />
                        </div>
                        <input
                          className={` form-control shadow-none border-0`}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label>
                        <span className="text-danger">
                          {/* <FaStarOfLife className="fs-12"/> */}*
                        </span>
                        <span className="fs-13 fw-500">Password</span>
                      </label>
                      <div
                        className={`${styles.login_input} d-flex align-items-center justify-content-start`}
                      >
                        <div>
                          <FiLock
                            className="blue-text fs-20 ms-2"
                            style={{ marginBottom: 2 }}
                          />
                        </div>
                        <input
                          className={` form-control shadow-none border-0`}
                        />
                      </div>
                    </div>
                    <div>
                      <button className="btn blue-bg white-text fs-14 fw-500 w-100">Sign In</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
