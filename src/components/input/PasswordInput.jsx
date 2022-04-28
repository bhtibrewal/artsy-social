import { useState } from "react";
import { FaEye, FaEyeSlash } from "../../assets/icons";

export const PasswordInput = ({ value, onChange, label }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="artsy-input passwrd-input">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="password"
        value={value}
        onChange={onChange}
      />
      <span
        onClick={() => setShowPassword((prev) => !prev)}
        className="icon"
        title={showPassword ? "Hide Password " : "Show Password"}
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </span>
      <span className="input-label">{label}</span>
    </div>
  );
};
