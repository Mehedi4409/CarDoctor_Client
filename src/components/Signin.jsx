import React, { useContext } from 'react';
import login from '../assets/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { Result } from 'postcss';

const Signin = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error =>console.error(error)
            )
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex flex-col lg:flex-row gap-4 md:gap-32">
                <div className="text-center lg:text-left w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="email" className="input input-bordered" required />
                        </div>
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

                        </div>

                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-orange-500 text-white" value="Sign up" />
                        </div>

                    </form>
                    <p className='pb-4 text-center'>Already Have an Account? <Link className='font-bold text-orange-500' to='/login'>LogIn</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Signin;