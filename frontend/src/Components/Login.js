import React from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import {useState} from 'react';



function Login() {
    const auth=useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        auth.login({ email, password });
       navigate("/student-list");
    }
    
  return (
    <div>
         <form >
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button varient="danger" size="lg" type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Login
      </button>
    </form>
    </div>
  )
}

export default Login;