import { useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup";
import { addUser } from "../services/usersService";

interface Register2Props {}

const Register2: FunctionComponent<Register2Props> = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup
        .string()
        .required()
        .email("Invalid email")
        .min(10, "Email must contain 10 characters"),
      password: yup.string().required().min(8),
    }),
    onSubmit: (values, { resetForm }) => {
      addUser(values)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="display-1 text-primary">REGISTER</h1>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && (
        <p className="text-danger">{formik.errors.email}</p>
      )}
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password && (
        <p className="text-danger">{formik.errors.password}</p>
      )}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!formik.dirty || !formik.isValid}
      >
        Register
      </button>
    </form>
  );
};

export default Register2;
