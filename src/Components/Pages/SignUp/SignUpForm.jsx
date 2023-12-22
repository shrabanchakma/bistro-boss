import { useState } from "react";
import SignUpTextInput from "./SignUpTextInput";
import PropTypes from "prop-types";
const SignUpForm = ({ onSubmit, register, handleSubmit, errors }) => {
  const [errorCheck, setErrorCheck] = useState(false);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      {/* title, type, placeholder, register */}
      <SignUpTextInput
        title="Name"
        type="text"
        placeholder="your name"
        register={register}
        registerName="name"
      />
      {errorCheck && errors.name && (
        <span className="text-rose-600">Name is required</span>
      )}
      <SignUpTextInput
        title="Email"
        type="Email"
        placeholder="email"
        register={register}
        registerName="email"
      />
      {errorCheck && errors.email && (
        <span className="text-rose-600">Email is required</span>
      )}
      <SignUpTextInput
        title="Password"
        type="password"
        placeholder="password"
        register={register}
        registerName="password"
      />
      {errorCheck && errors.password?.type === "required" && (
        <span className="text-rose-600">Password is required</span>
      )}
      {errorCheck && errors.password?.type === "pattern" && (
        <span className="text-rose-600">
          Password must include least one Uppercase letter and one special
          character
        </span>
      )}
      {errorCheck && errors.password?.type === "minLength" && (
        <span className="text-rose-600">PassWord is to short</span>
      )}

      <div className="form-control md:mt-3 lg:mt-6">
        <input
          onClick={() => setErrorCheck(true)}
          className="btn btn-primary"
          type="submit"
          value="SignUp"
        />
        {/* <button  className="btn btn-primary">
          SignUp
        </button> */}
      </div>
    </form>
  );
};

export default SignUpForm;
SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
};
