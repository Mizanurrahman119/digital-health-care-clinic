import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Create New Account</h2>
            <form onSubmit="">
                <input style={{margin:"10px"}} type="email" name="email" id="" placeholder="enter your email" />
                <br />
                <input  type="password" name="password" id="" placeholder="enter your password" />
                <br />
                <input style={{margin:"10px"}} type="password" name="password" id="" placeholder="re-enter your password" /> 
                <br />
                <input className="bg-warning" style={{margin:"10px", borderRadius:"5px", border:"none"}} type="submit" value="submit" />
            </form>
            <p>Already Have an Account? <Link style={{textDecoration:'none'}} to="/login">login</Link></p>
        </div>
    );
};

export default Register;