import React, { useState, useEffect } from "react";

const SignInSignUp = () => {

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const [isSearchActive, setIsSearchActive] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/styles/signinStyle.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };

  }, [])

  return (
    <div
      className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}
    >
      <div className="forms-container">
        <div className="signin-signup">
          <form
            action="#"
            className="sign-in-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          <form
            action="#"
            className="sign-up-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Don't have an account yet ? Sign up and get access to all our
              services.
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => setIsSignUpMode(true)}
            >
              Sign up
            </button>
          </div>
          <img src="/assets/log.svg" className="image" alt="sign in illustration" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Already made an account here? Sign in and get access to all our
              services.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => setIsSignUpMode(false)}
            >
              Sign in
            </button>
          </div>
          <img
            src="/assets/register.svg"
            className="image"
            alt="sign up illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
