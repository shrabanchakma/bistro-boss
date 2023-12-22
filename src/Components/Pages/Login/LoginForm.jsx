import { useState } from "react";
import LoginTextInput from "./LoginTextInput";
import PropTypes from "prop-types";
import { LoadCanvasTemplate } from "react-simple-captcha";
const LoginForm = ({
  onSubmit,
  register,
  handleSubmit,
  errors,
  handleCaptchaValidation,
  disabled,
}) => {
  const [errorCheck, setErrorCheck] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      {/* title, type, placeholder, register */}
      <LoginTextInput
        title="Email"
        type="Email"
        placeholder="email"
        register={register}
        registerName="email"
      />
      {errorCheck && errors.email && (
        <span className="text-rose-600">Email is required</span>
      )}
      <LoginTextInput
        title="Password"
        type="password"
        placeholder="password"
        register={register}
        registerName="password"
      />
      {errorCheck && errors.password?.type === "required" && (
        <span className="text-rose-600">Password is required</span>
      )}
      <LoginTextInput
        placeholder="captcha"
        handleCaptchaValidation={handleCaptchaValidation}
      />
      <div className="form-control md:mt-3 lg:mt-6">
        <input
          onClick={() => setErrorCheck(true)}
          className="btn btn-primary"
          type="submit"
          value="Login"
        />
      </div>
    </form>
  );
};

export default LoginForm;
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
  handleCaptchaValidation: PropTypes.func,
  setDisabled: PropTypes.func,
  disabled: PropTypes.bool,
};
