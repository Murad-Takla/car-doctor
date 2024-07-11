import React, { useContext } from 'react';
import logImg from '../../assets/images/login/login.svg'
import { json, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/MyContext';
import toast from 'react-hot-toast';

const Login = () => {

    const { SignIn } = useContext(AuthContext)

    const location = useLocation()
    // console.log(location)
    const From = location.state?.from?.pathname || '/'
    const navigate = useNavigate()

    const loginFormHandler = (event) => {
        event.preventDefault()
        const form = event.target

        const email = form.email.value
        const password = form.password.value
        SignIn(email, password)
            .then(result => {
                const user = result.user
                // console.log(user)
                form.reset()
                toast.success(`Successfully logged in !`)
                // get jwt token

                const tokenUser = {
                    email: user.email
                }
                fetch('https://genius-car-server-theta-eight.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(tokenUser)
                })
                    .then(res => res.json())
                    .then(data => {
                    
                        // local storage is the easiest but not the best place to store the JWT token
                        localStorage.setItem('genius-car' , data.token)
                        navigate(From, { replace: true })
                    })

            })
            .catch((err) => {
                console.dir(err.message)
            })


    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center lg:text-left">
                    <img src={logImg} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form
                        onSubmit={loginFormHandler}
                        className="card-body">
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
                            <button

                                className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;