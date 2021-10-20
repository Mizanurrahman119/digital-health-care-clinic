import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import "./Login.css"

const Login = () => {
    const {signInUsingGoogle} = UseAuth();
    const {signInUsingGitHub} = UseAuth();

    const handleLogIn = e => {
        e.preventDefault();
    }

    return (
        <div>
            <h3 style={{margin:"10px"}}>Please Login</h3>
            <form onSubmit={handleLogIn}>
                <input style={{margin:"10px"}} type="email" name="email" id="" placeholder="enter your email" /> 
                <br />
                <input type="password" name="password" id="" placeholder="enter your password" /> 
                <br />
                <input className="bg-warning" style={{margin:"10px", borderRadius:"5px", border:"none"}} type="submit" value="submit" />
            </form>
            <p>Are You New user? <Link style={{textDecoration:"none"}} to="/register">Create Account</Link></p>
            <button style={{margin:"10px"}} onClick={signInUsingGoogle} className="btn btn-warning"><i className="fab fa-google"></i>Google Sign In</button>
            <button style={{margin:"10px"}} onClick={signInUsingGitHub} className="btn btn-warning"><i class="fab fa-github"></i>GitHub Sign In</button>
        </div>
    );
};

export default Login;