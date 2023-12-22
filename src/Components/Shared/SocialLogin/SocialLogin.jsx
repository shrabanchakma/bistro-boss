import { FaFacebook, FaGoogle } from "react-icons/fa";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import PropTypes from "prop-types";
const SocialLogin = ({ navigate, from }) => {
  const { GoogleSignIn } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignIn().then((userCredentials) => {
        const user = userCredentials.user;
        if (user?.email) {
          const userInfo = {
            userName: user.displayName,
            userEmail: user.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            navigate(from ? from : "/");
          });
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-evenly my-6 ">
      <button
        onClick={handleGoogleSignIn}
        className="btn text-[#4285F4] bg-white font-bold "
      >
        <FaGoogle />
        Google
      </button>
      <button className="btn text-[#3b5998] bg-white font-bold">
        <FaFacebook />
        Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
SocialLogin.propTypes = {
  navigate: PropTypes.func,
  from: PropTypes.string,
};
