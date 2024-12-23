import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="register">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="password"
              />
            </div>
            <div className="form-group">
              <input type="submit" value="login" className="btn" />
            </div>
            <div className="form-group">
              <span>
                <Link to="/register"> Don't have any account</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login