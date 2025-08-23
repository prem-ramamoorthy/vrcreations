import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signinStyle.css";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const SignInSignUp = () => {
  const navigate = useNavigate();

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser]         = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        navigate("/", { replace: true });
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const clearFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadingMessage("Logging in...");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      clearFields();
      navigate("/", { replace: true });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      setLoadingMessage("");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadingMessage("Creating account...");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      clearFields();
      navigate("/", { replace: true });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      setLoadingMessage("");
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    setLoadingMessage("Logging out...");
    try {
      await signOut(auth);
      navigate("/", { replace: true });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      setLoadingMessage("");
    }
  };

  const Spinner = () => (
    <span className="spinner" aria-hidden="true" />
  );

  if (user) {
    return (
      <div className="signin-page">
        <h2>Welcome, {user.email}</h2>
        <button
          className="btn solid"
          onClick={handleLogout}
          disabled={loading}
          aria-busy={loading}
          aria-disabled={loading}
        >
          {loading ? (
            <>
              <Spinner /> {loadingMessage}
            </>
          ) : (
            "Logout"
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="signin-page">
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">

            <form className="sign-in-form" onSubmit={handleLogin}>
              <h2 className="title">Sign in</h2>

              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className="btn solid"
                disabled={loading}
                aria-busy={loading}
                aria-disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner /> {loadingMessage}
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>
            <form className="sign-up-form" onSubmit={handleSignUp}>
              <h2 className="title">Sign up</h2>

              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className="btn"
                disabled={loading}
                aria-busy={loading}
                aria-disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner /> {loadingMessage}
                  </>
                ) : (
                  "Sign up"
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>Don't have an account yet? Sign up and get access to all our services.</p>
              <button
                className="btn transparent"
                onClick={() => setIsSignUpMode(true)}
                disabled={loading}
                aria-disabled={loading}
              >
                Sign up
              </button>
            </div>
            <img src="/assets/log.svg" className="image" alt="sign in illustration" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>Already made an account here? Sign in and get access to all our services.</p>
              <button
                className="btn transparent"
                onClick={() => setIsSignUpMode(false)}
                disabled={loading}
                aria-disabled={loading}
              >
                Sign in
              </button>
            </div>
            <img src="/assets/register.svg" className="image" alt="sign up illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
