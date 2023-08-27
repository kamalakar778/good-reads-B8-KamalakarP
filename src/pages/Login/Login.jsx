import React, { useState } from "react";
import login from "./login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
  const [responseData, setResponseData] = useState({
    responseText: "",
    responseClass: "",
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      //   console.log(values);
      axios({
        method: "post",
        url: "https:\\apigoogleusercontent.com",
        data: values,
      })
        .then(
          (response) => {
            localStorage.setItem("token", response.data.token);
            setResponseData({
              responseText: "Login successful",
              responseClass: "alert alert-success",
            });
            console.log(response.json());
          },
          (err) => {
            setResponseData({
              responseText: "Login failed",
              responseClass: "alert alert-danger",
            });
          }
        )
        .catch((error) => {
          console.log(error);
        });
    },

    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      email: Yup.string().required("email is required"),
      password: Yup.string().required("password is required"),
    }),
  });
  return (
    <>
      <div className="col-md-3"></div>
      <div className="shadow py-5 mb-5 bg-white rounded mt-5 container col-md-3 mb-3">
        <form
          initialValues={formik.initialValues}
          onSubmit={formik.handleSubmit}
          onChange={formik.handleChange}
          validationSchema={formik.validationSchema}
        >
          <div className={responseData.responseClass}>
            {responseData.responseText}
          </div>
          <h2>Login</h2>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              onBlur={formik.handleBlur}
              className={
                formik.errors.email ? "form-control is-invalid" : "form-control"
              }
            />
            {formik.touched.email && formik.errors.email ? (
              <small className="text-danger">{formik.errors.email}</small>
            ) : null}
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              className={
                formik.errors.password
                  ? "form-control is-invalid"
                  : "form-control"
              }
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <small className="text-danger">{formik.errors.password}</small>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={formik.isValid}
            className="btn btn-primary center mb-3"
          >
            Submit
          </button>
          <div>
            Don't Have an Account ? Signup <a href="/register">Here</a>
          </div>
        </form>
      </div>
      <div className="col-md-3"></div>
    </>
  );
};

export default Login;
