import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, InputField, PasswordInput } from "../../../components";
import { useToast, useAuth } from "../../../contexts";
import { signUp } from "../../../services";

const SignUp = () => {
  const navigate = useNavigate();
  const { setIsUserLoggedIn, userDataDispatch } = useAuth();
  const { showToast } = useToast();
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    image: "https://media.istockphoto.com/vectors/man-artist-painting-autumn-tree-landscape-in-the-park-isolated-vector-vector-id1058684612?k=20&m=1058684612&s=612x612&w=0&h=edHBtI190lKLq_a0YbCWSliJ_FyHsPcysvOZ6fK_Ap0="
  });
  const { firstName, lastName, username, email, password } = inputValues;
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  /* email and password validation */
  var passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{9,16}$/;
  const validPassword = passwordPattern.test(password);

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const validEmail = emailPattern.test(email);

  const canSubmit = () => {
    return (
      firstName !== "" &&
      lastName !== "" &&
      username !== "" &&
      validEmail &&
      validPassword
    );
  };
  /* if agree to terms and can submit then set disabled false */
  const isDisabled = () => !(agreeToTerms && canSubmit());
  const disabled = isDisabled();
  const submitHandler = (e) => {
    if (!validEmail) showToast({ title: "not a valid Email", type: "error" });
    if (!validPassword)
      showToast({ title: "not a valid password", type: "error" });
    if (!disabled) {
      e.preventDefault();
      signUp({
        data: inputValues,
        userDataDispatch,
        setIsUserLoggedIn,
        showToast,
        navigate,
      });
    }
  };

  return (
    <main className="main center">
      <form className="flex-col signup-sec" onSubmit={submitHandler}>
        <p className="body-l">Create my account on Artsy Shop!</p>

        <InputField
          value={firstName}
          onChange={(e) =>
            setInputValues({ ...inputValues, firstName: e.target.value })
          }
          label={"First Name"}
        />
        <InputField
          value={lastName}
          onChange={(e) =>
            setInputValues({ ...inputValues, lastName: e.target.value })
          }
          label={"Last Name"}
        />
        <InputField
          value={username}
          onChange={(e) =>
            setInputValues({ ...inputValues, username: e.target.value })
          }
          label={"Username"}
        />
        <InputField
          value={email}
          onChange={(e) =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
          label={"Email"}
        />
        {!validEmail && email !== "" && (
          <p className="error-msg">Enter a valid email.</p>
        )}
        <PasswordInput
          value={password}
          onChange={(e) =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
          label={"Password"}
        />
        {inputValues?.password.length !== 0 &&
          inputValues?.password.length <= 8 && (
            <p className="error-msg">Password must be more than 8 letters</p>
          )}
        <label className="flex-align-center">
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
          />
          <span className="checkbox-text">
            By registering, I accept the
            <p
              onClick={() =>
                showToast({
                  title: "Coming Soon",
                  type: "primary",
                })
              }
              className="primary"
            >
              General terms and conditions.
            </p>
          </span>
        </label>
        <Button
          type="submit"
          className={`btn-primary ${disabled && "disabled-btn"}`}
        >
          <span>Create Account</span>
          <i className="fa-solid fa-arrow-right" />
        </Button>
        <div>
          <p className="body-md">Already have account ?</p>
          <div
            className={`link-text-primary `}
            onClick={() => navigate("/sign-in")}
          >
            SIGN IN
          </div>
        </div>
      </form>
    </main>
  );
};
export default SignUp;