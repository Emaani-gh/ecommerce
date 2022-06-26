import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = ()=> {
  return (
    <div className='container'>
      <form>
        <h3 className='py-4 text-primary fs-1 '>Sign Up </h3>
        <div className="mb-3">
            <label htmlFor="email" className="form-label fs-2">First Name </label>
            <input type="text" className="form-control form-control-lg" id="fName" placeholder="enter first Name" />
        </div>

        <div className="mb-3">
            <label htmlFor="pass" className="form-label fs-2">last Name</label>
            <input type="text" className="form-control form-control-lg" id="lName" placeholder="Enter Last Name" />
        </div>

        <div className="mb-3">
            <label htmlFor="pass" className="form-label fs-2">Email</label>
            <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter Email" />
        </div>

        <div className="mb-3">
            <label htmlFor="pass" className="form-label fs-2">Birthday</label>
            <input type="date" className="form-control form-control-lg" id="birthday" placeholder="Enter Birthday" />
        </div>

        <div className="mb-3">
            <label htmlFor="pass" className="form-label fs-2">Password</label>
            <input type="password" className="form-control form-control-lg" id="pass" placeholder="Enter Password" />
        </div>

         <div className="mb-3">
            <label htmlFor="pass" className="form-label fs-2">Confirm Password</label>
            <input type="password" className="form-control form-control-lg" id="cPass" placeholder="Confirm Password" />
        </div>

        <p className='fs-4'>Already have an account? <span><Link className='text-primary fs-3' to='/sign-in'> Sign In ! </Link> </span></p>

        <div className='mt-2 mb-3'>
        <button type='button' className='btn btn-lg btn-primary'> Sign Up</button>
        <button type="button" className="mx-4 btn-lg btn btn-outline-danger">Cancel</button>
        </div>

        
        
      </form>
      </div>
  )
}

export default SignUp