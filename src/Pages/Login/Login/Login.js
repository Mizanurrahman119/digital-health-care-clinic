import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';

const Login = () => {
    const {signInUsingGoogle} = UseAuth();
    return (
        <div>
            <h3 style={{margin:"10px"}}>Please Login</h3>
            <form onSubmit="">
                <input style={{margin:"10px"}} type="email" name="email" id="" placeholder="enter your email" /> 
                <br />
                <input type="password" name="password" id="" placeholder="enter your password" /> 
                <br />
                <input className="bg-warning" style={{margin:"10px", borderRadius:"5px", border:"none"}} type="submit" value="submit" />
            </form>
            <p>Are You New user? <Link style={{textDecoration:"none"}} to="/register">Create Account</Link></p>
            <button style={{margin:"10px"}} onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;