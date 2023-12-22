import PropTypes from "prop-types";
const SignUpTextInput = ({
  title,
  type,
  placeholder,
  register,
  registerName,
}) => {
  {
    /* title, type, placeholder, register */
  }
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{title}</span>
      </label>
      {type === "password" ? (
        <input
          {...register(`${registerName}`, {
            required: true,
            pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/,
            minLength: 6,
          })}
          type="password"
          placeholder="password"
          className="input input-bordered"
        />
      ) : (
        <input
          {...register(`${registerName}`, { required: true })}
          type={type}
          placeholder={placeholder}
          className="input input-bordered"
        />
      )}
    </div>
  );
};

export default SignUpTextInput;
SignUpTextInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  registerName: PropTypes.string,
};
