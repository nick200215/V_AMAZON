import { Link, useNavigate } from "react-router-dom";
import SignFooter from "../signFooter/signFooter";
import logo from "../../assets/img/Amazon_logo_for_sign.svg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { userRegistr } from "../../services/user/registrationUser";
import { Typography } from "@mui/material";

const validationSchema = Yup.object({
  userName: Yup.string()
    .max(15, "* Must be 15 characters or less")
    .required("* Required"),
  email: Yup.string().email("* Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "* Must be 8 characters or more")
    .matches(/(?=.*[0-9])/, "* Password must contain a number")
    .matches(/(?=.*[a-z])/, "* Password must contain a lowercase letter")
    .matches(/(?=.*[A-Z])/, "* Password must contain an uppercase letter"),
});

const initialValues = {
  userName: "",
  password: "",
  email: "",
};
const SignUp = () => {
  const [showSuccessMessage, setSuccessMessage] = useState(false);

  const navigate = useNavigate();
  const handleRegister = async (value: typeof initialValues) => {
    try {
      console.log(value);
      await userRegistr(value);
      setSuccessMessage(true);
    } catch (error) {
      console.log(error);
    }
    navigate("/Amazon-Clone-Project/");
  };
  return (
    <div className="w-[100%] flex justify-center gap-5  flex-col mt-5 ">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center  gap-3 w-[350px]">
          <Link to={"/Amazon-Clone-Project/"}>
            <img src={logo} alt="logo" className="w-24 h-7" />
          </Link>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            <Form className="flex justify-center flex-col gap-4 p-4  border rounded-lg box-border ">
              <h2 className="font-normal text-3xl">Create account</h2>
              <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="userName" className="font-medium">
                  Your name
                </label>
                <Field
                  name="userName"
                  placeholder="First and last name"
                  className="border border-cyan-900 rounded p-1"
                />
                <span className="text-red-500 text-sm">
                  <ErrorMessage name="userName" />
                </span>
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <Field
                  name="email"
                  className="border border-cyan-900 rounded p-1"
                />
                <span className="text-red-500 text-sm">
                  <ErrorMessage name="email" />
                </span>
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="At least 8 characters"
                  className="border border-cyan-900 rounded p-1"
                />
                <span className="text-red-500 text-sm">
                  <ErrorMessage name="password" />
                </span>
              </div>

              <button
                type="submit"
                className="bg-amazon-button rounded-lg p-1 font-medium"
              >
                Continue
              </button>

              {showSuccessMessage && (
                <Typography color="success" component="p">
                  Successfully registered
                </Typography>
              )}

              <div className="text-xs w-[100%] font-bold  ">
                By creating an account, you agree to Amazon's{" "}
                <Link
                  to={"/Amazon-Clone-Project/"}
                  className=" text-blue-900 hover:underline hover:text-amazon-orange "
                >
                  Conditions of Use
                </Link>{" "}
                and
                <Link
                  to={"/Amazon-Clone-Project/"}
                  className=" text-blue-900 hover:underline hover:text-amazon-orange "
                >
                  {" "}
                  Privacy Notice.{" "}
                </Link>
                <div className="border-b my-3"></div>
                <p>
                  Already have an account?{" "}
                  <Link
                    to={"/Amazon-Clone-Project/signin"}
                    className=" text-blue-900 hover:underline hover:text-amazon-orange "
                  >
                    {" "}
                    Sign in{" "}
                  </Link>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>

      <SignFooter />
    </div>
  );
};

export default SignUp;
