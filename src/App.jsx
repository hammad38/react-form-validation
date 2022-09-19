import React from "react";
import "./style.css";
import { useFormik } from "formik";

const App = () => {

  return (  
    <div className="container">
      <div className="wrapper">
        <h1 className="heading">Welcome!</h1>
        <p className="para">This is form validation in react</p>

        <div className="subContainer">
          <form action="">
            <div className="input-block">
              <label htmlFor="name" className="input-label">
                Name
              </label>
              <input
                className="input"
                type="name"
                autoComplete="off"
                name="name"
                id="name"
              />
            </div>
            <div className="input-block">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input
                className="input"
                type="email"
                autoComplete="off"
                name="email"
                id="email"
              />
            </div>
            <div className="input-block">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                className="input"
                type="password"
                autoComplete="off"
                name="password"
                id="password"
              />
            </div>
            <div className="input-block">
              <label htmlFor="confirmPassword" className="input-label">
                Confirm Password
              </label>
              <input
                className="input"
                type="password"
                autoComplete="off"
                name="confirmPassword"
                id="confirmPassword"
              />
            </div>
            <div  className="input-block submit-btn">

            <input className="submit" type="submit" name="submit" id="submit" />

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
