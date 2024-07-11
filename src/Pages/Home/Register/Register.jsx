import React, { useContext } from 'react';
import registerImg from '../../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/MyContext';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation() 
    const From = location?.state?.from?.pathname || '/'
    const registerFormHandler = (event) => {
        event.preventDefault();

        const form = event.target

        const name = form.name.value
        const password = form.password.value
        const email = form.email.value

        createUser(email, password)
            .then(result => {
                const user = result.user

                const tokenUser ={
                    email : user.email
                }
                
                
                // get jwt token 
                
                fetch('https://genius-car-server-theta-eight.vercel.app/jwt' , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(tokenUser)
                })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('genius-car' , data.token)
                })
                 navigate(From , {replace:true})

                form.reset()


            })
            .catch( err =>  console.error(err))
           
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="text-center lg:text-left">
                        <img src={registerImg} alt="" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form 
                        onSubmit={registerFormHandler}
                        className="card-body">
                            <h1 className="text-center text-5xl mb-5 font-bold">Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="enter your name " className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Password</span>
                                </label>
                                <input name='password' type="password" placeholder="enter password" className="input input-bordered" required />
                                <h2>
                                    Already have an Account?
                                    <Link to={'/login'} className="font-semibold text-orange-700 pl-2">
                                        LogIn
                                    </Link>
                                </h2>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;