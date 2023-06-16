import React, { Component } from "react";
import axios from "axios";
import "./signin.scss";

export default class Signin extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = async (event) => {
    event.preventDefault();
  
    const { email, password } = this.state;
  
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password
      }).then((res) => {
        if (res.data.mess) {
          alert("Thành công");
          window.location.assign("http://localhost:3000/trangchu");
          const id_user = res.data.id;
          sessionStorage.setItem("id_user", id_user);
        }
      });
      
      
      console.log("Dữ liệu email:", email);
      console.log("Dữ liệu password:", password);

      
      // Thực hiện các xử lý tiếp theo sau khi gọi API thành công
    } catch (error) {
      console.error("Đã xảy ra lỗi", error);
    }
  }
  render() {
    const { email, password } = this.state;

    return (
      <main className="main">
        <div className="container">
          <section className="wrapper">
            <div className="heading">
              <h1 className="text text-large">Sign In</h1>
              <p className="text text-normal">
                New user? <span><a href="#" className="text text-links">Create an account</a></span>
              </p>
            </div>
            <form
              name="signin"
              className="form"
              onSubmit={this.handleSubmit}
              encType="multipart/form-data"
            >
              <div className="input-control">
                <label htmlFor="email" className="input-label" hidden>Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-field"
                  placeholder="Email Address"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-control">
                <label htmlFor="password" className="input-label" hidden>Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input-field"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-control">
                <a href="#" className="text text-links">Forgot Password</a>
                <input
                  type="submit"
                  name="submit"
                  className="input-submit"
                  value="Sign In"
                  disabled={!email || !password}
                />
              </div>
            </form>
            <div className="striped">
              <span className="striped-line"></span>
              <span className="striped-text">Or</span>
              <span className="striped-line"></span>
            </div>
            <div className="method">
              <div className="method-control">
                <a href="#" className="method-action">
                  <i className="ion ion-logo-google"></i>
                  <span>Sign in with Google</span>
                </a>
              </div>
              <div className="method-control">
                <a href="#" className="method-action">
                  <i className="ion ion-logo-facebook"></i>
                  <span>Sign in with Facebook</span>
                </a>
              </div>
              <div className="method-control">
                <a href="#" className="method-action">
                  <i className="ion ion-logo-apple"></i>
                  <span>Sign in with Apple</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
