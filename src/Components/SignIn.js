import React from 'react'
import { Link } from 'react-router-dom';
import App from './../App';

function SignIn() {
  return (
      <div className='container'>
      <form>
        <h3 className='py-4 text-primary fs-1 '>Sign In </h3>
        <div className="mb-3">
            <label htmlFor="email" className="form-label fs-2">Email Address </label>
            <input type="email" className="form-control form-control-lg" id="email" placeholder="enter email here" />
        </div>

        <div className="mb-3">
            <label htmlFor="pass" className="form-label fs-2">Password</label>
            <input type="text" className="form-control form-control-lg" id="pass" placeholder="Enter password here" />
        </div>

        <div className='mt-2 mb-3'>
        <button type='button' className='btn btn-lg btn-primary'> Sign In</button>
        <button type="button" className="mx-4 btn-lg btn btn-outline-danger">Cancel</button>
        </div>

        <p className='fs-4'>Dont have an account? <span><Link className='text-primary fs-3' to='/sign-up'> Sign Up ! </Link> </span></p>
        
      </form>
      </div>


  )
}

export default SignIn