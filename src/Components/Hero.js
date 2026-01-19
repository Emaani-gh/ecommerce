import React from 'react'
import { Link } from 'react-router-dom'
import img from '/img/home-shoe-2.png'

const Hero =()=> {
  return (
      
   <div className="jumbotron bg-light py-4 ">
        <div className='container  d-sm-flex px-4 px-sm-0'>
            
            <div className='order-2 align-self-center '>
                <img className='w-100 md-ms-4' src={img} />
            </div>

            <div className='align-self-center mt-4 pe-sm-4'>
                <h1 className="display-2 fw-bold "> Like Foot </h1>
                <p className="lead"> Break Barriers, Set Record and Change the Game </p>
               <Link to={'#'} className="btn btn-primary btn-lg" role="button"> Add To Cart</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
