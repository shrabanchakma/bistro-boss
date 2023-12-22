import { useEffect, useState } from "react";
import { loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import UseAuth from "../../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import LoginForm from "./LoginForm";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userSignIn } = UseAuth();

  const [disabled, setDisabled] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptchaValidation = (e) => {
    if (validateCaptcha(e.target.value) == true) {
      setDisabled(false);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await userSignIn(data.email, data.password);
      navigate(from, { replace: true });
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row h-full lg:h-5/6 shadow-2xl">
          {/* login form image */}
          <div className="text-center md:w-3/4 lg:w-1/2 lg:text-left rounded-xl">
            <img
              className="rounded-xl"
              src={
                "https://img.freepik.com/free-vector/hand-drawn-iranian-women-illustration_23-2149855924.jpg?w=1380&t=st=1699986127~exp=1699986727~hmac=2fef9b4acdf0db1b7cef90b1b1afb8723879239a60e1ae9dd3c338755b0630c4"
              }
              alt=""
            />
          </div>
          <div className="card w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            {" "}
            <LoginForm
              onSubmit={onSubmit}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              handleCaptchaValidation={handleCaptchaValidation}
              setDisabled={setDisabled}
              disabled={disabled}
            />
            <div className="text-center text-yellow-600 w-11/12 mx-auto">
              <h4>
                New here?{" "}
                <Link className="font-medium" to={"/signup"}>
                  Create a New Account
                </Link>
              </h4>
              <div className="divider">or</div>
              <SocialLogin navigate={navigate} from={from} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
