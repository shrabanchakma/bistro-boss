import PropTypes from "prop-types";
import { LoadCanvasTemplate } from "react-simple-captcha";
const LoginTextInput = ({
  title,
  type,
  placeholder,
  register,
  registerName,
  handleCaptchaValidation,
}) => {
  return (
    <div className="form-control">
      {placeholder === "captcha" ? (
        <>
          <label className="label">
            <LoadCanvasTemplate />
          </label>
          <input
            onBlur={handleCaptchaValidation}
            type="text"
            placeholder="captcha"
            className="input active:outline-none input-bordered rounded-none rounded-lg"
          />
        </>
      ) : (
        <>
          <label className="label">
            <span className="label-text">{title}</span>
          </label>

          <input
            {...register(`${registerName}`, { required: true })}
            type={type}
            placeholder={placeholder}
            className="input input-bordered"
          />
        </>
      )}
    </div>
  );
};

export default LoginTextInput;
LoginTextInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  registerName: PropTypes.string,
  handleCaptchaValidation: PropTypes.func,
};
