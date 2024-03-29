import styles from "./Login.module.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

function Login() {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const showNotification = (type, message) => {
    api[type]({
      message: message,
    });
  };

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "admin@gmail.com",
      password: "admin",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    if (data.email === "admin@gmail.com" && data.password === "admin") {
      showNotification("success", "Login Successfully");
      localStorage.setItem(
        "Local_User",
        "fsfsoijomdpgmpd98y94h9sv4w949f0wnv0j43gw0g"
      );
      localStorage.setItem("status", true);
      navigate("/dashboard");
      reset();
      showNotification("success", "Login Successfully");
    } else {
      showNotification("error", "Login Failed");
    }
  };
  return (
    <>
      {contextHolder}
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
                  <form onSubmit={handleSubmit(onSubmit)}>
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
                          type="email"
                          className={` form-control shadow-none border-0`}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                              message: "Email is Invalid",
                            },
                            maxLength: {
                              value: 55,
                              message: "Max length is 55",
                            },
                          })}
                        />
                      </div>
                      <span className="text-danger mt-1 fs-11 fw-500">
                        {errors.email && errors.email.message}
                      </span>
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
                          type={view ? "text" : "password"}
                          className={` form-control shadow-none border-0`}
                          {...register("password", {
                            required: "Password is required",
                            maxLength: {
                              value: 55,
                              message: "Max length is 55",
                            },
                          })}
                        />
                        <div onClick={() => setView(!view)}>
                          {view ? (
                            <IoEye className="fs-20 me-2" />
                          ) : (
                            <IoEyeOff className="fs-20 me-2" />
                          )}
                        </div>
                      </div>
                      <span className="text-danger mt-1 fs-11 fw-500">
                        {errors.password && errors.password.message}
                      </span>
                    </div>
                    <div>
                      <button className="btn blue-bg white-text fs-14 fw-500 w-100">
                        Sign In
                      </button>
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
