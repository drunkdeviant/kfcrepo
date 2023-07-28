import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Login = () => {
  return (
    <>
      <Header />
      <div className="login-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="lead-text">
              <h3>LOGIN WITH SOCIAL LINKS</h3>
            </div>
            <p>
              Already Registered<a href="">Login</a>
            </p>
            <hr />
            <button className="btn btn-danger d-block w-100 mb-2">
              Login with Google
            </button>
            <button className="btn btn-primary d-block w-100">
              Login with Facebook
            </button>
            <hr />
            <form className="row g-3">
              <div className="col-md-12">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-12">
                <label for="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Login Now
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="lead-text">
              <h3>NEW CUSTOMER</h3>
            </div>
            <p>
              By creating account with us, purchasing on our website becomes
              much faster and easier.
            </p>
            <button type="button" class="btn btn-outline-danger">
              NEW CUSTOMER
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
