import React, { useContext } from 'react';
import login from '../assets/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.error(error)
            )
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex flex-col lg:flex-row gap-4 md:gap-32">
                <div className="text-center lg:text-left w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onClick={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-orange-500 text-white" value="Login" />
                        </div>
                    </form>
                    <p className='pb-4 text-center'>Don't Have an Account? <Link className='font-bold text-orange-500' to='/signin'>Sign Up</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;