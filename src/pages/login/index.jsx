import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import logo from 'images/logolingvo12.png';
import Preloader from '../../components/preloader';
import { useStateProvider } from '../../store';
import { useAuthActions } from '../../actions/auth';
import * as routePaths from '../../constants/paths';
import Alert from '../../components/Alert';

{/* import {login} from '../../actions/auth'; */ }
{/* import { login } from '../../constants/auth/actions'; */ }

const RememberMe = () => (
  <div className="form-group d-flex align-items-center justify-content-between">
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="remember-me" />
      <label htmlFor="remember-me" className="form-check-label">
        Remember Me
      </label>
    </div>
    <a href="!#" className="forgot-btn">Forgot Password?</a>
  </div>
);

const LoginPage = props => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const { login } = useAuthActions();
  const onSubmit = async event => {
    event.preventDefault();

    const payload = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };

    await login(payload);
  };

  return (
    <div>
      <Preloader />
      <div className="login-page-wrap">
        <div className="login-page-content">
          <div className="login-box">
            <div className="item-logo">
              <img src={logo} alt="logo" style={{ maxWidth: 210 }} />
            </div>
            <form className="login-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="email">Username</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="form-control"
                  ref={emailInput}
                />
                <i className="far fa-envelope" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  autoComplete="off"
                  className="form-control"
                  ref={passwordInput}
                />
                <i className="fas fa-lock" />
              </div>
              <RememberMe />
              <div className="form-group">
                <button type="submit" className="login-btn">Login</button>
              </div>
            </form>

            <div className="login-social">
              <p>or sign in with</p>
              <ul>
                <li>
                  <a href="!#" className="bg-fb">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="!#" className="bg-twitter">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="!#" className="bg-gplus">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
                <li>
                  <a href="!#" className="bg-git">
                    <i className="fab fa-github" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="sign-up">
            Don&apos;t have an account ?
            <a href="!#">Signup now!</a>
          </div>

        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default LoginPage;
