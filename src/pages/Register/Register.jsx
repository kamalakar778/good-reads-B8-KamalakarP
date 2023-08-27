import React from "react";
import register from "./register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
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
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              className={
                formik.errors.name ? "form-control is-invalid" : "form-control"
              }
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <small className="text-danger">{formik.errors.name}</small>
            ) : null}
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              className={
                formik.errors.email ? "form-control is-invalid" : "form-control"
              }
              onBlur={formik.handleBlur}
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
            disabled={!formik.isValid}
            className="btn btn-primary center mb-3"
          >
            Submit
          </button>
          <div>
            Already Have an Account ? Login <a href="/login">Here</a>
          </div>
        </form>
      </div>
      <div className="col-md-3"></div>
    </>
  );
};

export default Register;
