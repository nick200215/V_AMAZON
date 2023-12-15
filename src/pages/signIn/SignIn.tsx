import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/Amazon_logo_for_sign.svg";
import SignFooter from "../signFooter/signFooter";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { userSignIn } from "../../services/user/signInUser";
import jwt_decode from "jwt-decode";
import { handleLogin } from "../../features/userSlice";
import { UserType } from "../../types/user";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("* Invalid email address")
    .required("* Email is required"),
  password: Yup.string().required("* Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = async (values: typeof initialValues) => {
    const { password, email } = values;

    try {
      const user = await userSignIn({ password, email });

      if (user.data.jwt) {
        localStorage.setItem("token", user.data.jwt);
        const decoded: UserType = jwt_decode(user.data.jwt);

        dispatch(handleLogin(decoded));

        navigate("/Amazon-Clone-Project/");
      }
    } catch (error) {
      setError(true);
    }
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
            onSubmit={onLogin}
          >
            {() => (
              <Form className="flex justify-center flex-col gap-4 p-4 border rounded-lg box-border">
                <h2 className="font-normal text-3xl">Sign in</h2>
                <div className="flex flex-col gap-1 text-sm">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <Field
                    type="email"
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
                    type="password"
                    name="password"
                    className="border border-cyan-900 rounded p-1"
                  />
                  <span className="text-red-500 text-sm">
                    <ErrorMessage name="password" />
                  </span>
                </div>

                <button
                  className="bg-amazon-button rounded-lg p-1 font-medium"
                  type="submit"
                >
                  Continue
                </button>

                <div className="w-full flex justify-center bg-red-600/20">
                  {error && (
                    <p className="text-red-800 ">
                      Password or email is incorrect
                    </p>
                  )}
                </div>

                <p className="text-xs w-[100%] font-bold">
                  By continuing, you agree to Amazon's{" "}
                  <Link
                    to={"/Amazon-Clone-Project/"}
                    className=" text-blue-900 hover:underline hover:text-amazon-orange"
                  >
                    Conditions of Use
                  </Link>{" "}
                  and
                  <Link
                    to={"/Amazon-Clone-Project/"}
                    className=" text-blue-900 hover:underline hover:text-amazon-orange"
                  >
                    Privacy Notice.
                  </Link>
                </p>
              </Form>
            )}
          </Formik>

          <div className="relative w-[100%] flex justify-center">
            <p className="bg-white px-4 text-xs text-[#767676] font-normal z-20">
              New to Amazon?
            </p>
            <p className="border-b w-[100%] absolute top-[50%] z-10"></p>
          </div>
          <button className="w-[100%] border rounded-lg font-medium text-sm p-1 hover:bg-[#F7FAFA]">
            <Link to={"/Amazon-Clone-Project/signup"}>
              Create your Amazon account
            </Link>
          </button>
        </div>
      </div>

      <SignFooter />
    </div>
  );
};

export default SignIn;
