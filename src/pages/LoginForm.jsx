import styled from "styled-components";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const Form = () => {
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
      console.log("Google Credential: ", credential);

      // Send the token to backend
      await axios.post("http://localhost:5000/auth/google", { token: credential });

      alert("Login Successful!");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Sign-In Failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <StyledWrapper>
        <form className="form">
          <div className="title">Welcome,<br /><span>sign up to continue</span></div>
          <input className="input" name="email" placeholder="Email" type="email" />
          <input className="input" name="password" placeholder="Password" type="password" />
          <div className="login-with">
            <div className="button-log">
              <b>t</b>
            </div>
            <div className="button-log">
              {/* Google Login Button */}
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleFailure}
                width="40px"
              />
            </div>
            <div className="button-log">
              <svg className="icon" height="56.693px" id="Layer_1" viewBox="0 0 56.693 56.693" xmlns="http://www.w3.org/2000/svg">
                <path d="..." /> {/* keep your icon */}
              </svg>
            </div>
          </div>
          <button className="button-confirm">Let's go →</button>
        </form>
      </StyledWrapper>
    </GoogleOAuthProvider>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f8ff;

  .form {
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: beige;
    --main-color: black;
    width: 320px;
    padding: 30px;
    background: lightblue;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
    border: 2px solid var(--main-color);
    box-shadow: 6px 6px var(--main-color);
  }

  .title {
    color: var(--font-color);
    font-weight: 900;
    font-size: 24px;
    text-align: center;
  }

  .title span {
    display: block;
    color: var(--font-color-sub);
    font-weight: 600;
    font-size: 16px;
  }

  .input {
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 0 10px;
    outline: none;
  }

  .input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
  }

  .input:focus {
    border-color: var(--input-focus);
  }

  .login-with {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }

  .button-log {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 24px;
    height: 24px;
    fill: var(--main-color);
  }

  .button-log:active, .button-confirm:active {
    box-shadow: none;
    transform: translate(2px, 2px);
  }

  .button-confirm {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
  }
`;


export default Form;
