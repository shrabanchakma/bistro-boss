import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SignUpForm from "./SignUpForm";
import { Helmet } from "react-helmet-async";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
// library react-hook-form & props-types
const SignUp = () => {
  const { createUser } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data.email, data.password, data.name);
    try {
      const userInfo = { userName: data.name, userEmail: data.email };
      await createUser(data.email, data.password);
      const result = await axiosPublic.post("/users", userInfo);
      console.log(result.data);
      if (result.data.insertedId) {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse h-full lg:h-5/6 shadow-2xl">
          {/* singUp form image */}
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
            {/* form */}
            <SignUpForm
              onSubmit={onSubmit}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
            />
            <div className="text-center text-yellow-600">
              <h4>
                Already registered?{" "}
                <Link className="font-medium" to={"/login"}>
                  Go to log in
                </Link>
              </h4>
              <SocialLogin navigate={navigate} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
