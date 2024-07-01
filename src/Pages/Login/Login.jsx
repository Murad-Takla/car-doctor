import React, { useContext } from 'react';
import logImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/MyContext';

const Login = () => {
   const {createUser} = useContext(AuthContext)
   
    const loginFormHandler = (event) => {
        event.preventDefault()
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center lg:text-left">
                    <img src={logImg} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <h1 className="text-center text-5xl mb-5 font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <h2>Didn't have an Account? <Link to={`/register`} className=' py-2 font-semibold text-orange-700'>Register</Link></h2>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;