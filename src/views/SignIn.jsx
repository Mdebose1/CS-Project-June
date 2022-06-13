import React from 'react'
import { useAuth } from '../context/AuthProvider'

export const SignIn = () => {

    const { signIn, register } = useAuth();

    const handleSignIn = ( e, providerOption ) => {
        e.preventDefault();

        const { email, password } = e.target;
        signIn( { email, password }, providerOption );
    };

    const handleRegistration = (e) => {
        e.preventDefault();

        const data = e.target;

        const formData = {
            firstName: data.first_name.value,
            lastName: data.last_name.value,
            email: data.email.value,
            password: data.password.value,
            confirmPassword: data.confirm_password.value
        };

        register( formData );
    }

    return (
        
            <div className="row">
                <div className="col-md-6">
                    <h2>Sign In</h2>
                    <hr />
                    <form onSubmit={ ( e ) =>  handleSignIn( e, 'password' ) }>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" aria-describedby="emailHelpId" placeholder="Enter Your Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Enter Your Password" />
                        </div>
                        <div className='form-group'>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" name="remember_me"  value="checkedValue" />
                                    Remember Me
                                </label>
                            </div>
                        </div>
                        <div className='form-group'>
                            <input type="submit" value="Log In" className='btn btn-success' />
                        </div>
                        <div className='form-group'>
                            <input onClick={ (e) => handleSignIn (e, 'google')} type="submit" value="Sign In with Google" className='btn btn-success' />
                        </div> 
                    </form>
                </div>
                <div className="col-md-6">
                    <h2>Register</h2>
                    <hr />
                    <form onSubmit={ handleRegistration }>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" className="form-control" name="first_name" aria-describedby="emailHelpId" placeholder="First Name" />
                                </div>
                                <div className="col-6">
                                    <input type="text" className="form-control" name="last_name" aria-describedby="emailHelpId" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" aria-describedby="emailHelpId" placeholder="Enter Your Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Enter Your Password" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" />
                        </div>
                    <input type="submit" className="btn btn-primary" value="Register" />
                    </form>
                </div>
            </div>

        
    )
}



