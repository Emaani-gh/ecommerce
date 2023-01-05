import React from 'react'
import { useParams,Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Category = () => {

    const [products,setProducts] = useState([])
    const params = useParams()
    const {category} = params

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(data=>setProducts(data))
           
    },[category])
     

  return (
    <div>
        <div className='main-products'>

        <div className='container'>
          <h4 className='py-4'>{category}</h4>
         <div className='row'>
            
              {
                products.map(product=>
                <Link to={`/products/${product.id}`} key={product.id} className='col-sm-4 col-lg-3 col-xxl-2 mb-5'>
                  <div className='cardd h-100 border p-3 shadow  d-flex flex-column justify-content-between'>
                    <img className='w-100 ' src={product.image}/>
                    <p>{product.title}</p>
                    <p className='fs-5'> GHs 200 </p>
                      <div className="btn btn-primary " role="button"> Add To Cart</div>

                  </div>
                  
                </Link>
                )
              }
            
         </div>
        </div>

      </div>
    </div>
  )
}

export default Category