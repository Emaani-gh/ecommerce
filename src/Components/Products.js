import React, { useContext } from 'react'
import { Context } from './Context';
import { Link } from 'react-router-dom';

const Products = ()=> {
const products = useContext(Context) 
  const featuredProducts = products.slice(0,8)
 

  return (
  
    <div className='products'>
    
      <div className='container  d-sm-flex px-sm-0'>

        {/* ------------start of Featured products----------- */}
        <div className='featured-section my-3 py-sm-4 my-sm-5'>
          <h4 className='py-4'>Featured Products</h4>
        <div className='featured  d-sm-grid'> 
         
          
          {
            featuredProducts.map(product=>{
              let {id} = product
              
           return(
            <Link to={`/products/${id}`} key={product.id} className=' product p-4 p-sm-0 mb-sm-0 shadow  mb-5 bg-body rounded '>
              <div className=''>
                <img className='w-100' src={product.image}/>
              </div>
              
              <div className='desc' >
                <p className="display-5 fs-5 mb-0 "> {product.title}</p>
                <p > {product.description} </p>
                
                
              </div>
              <p className='mb-0 fs-5'> Ghs {product.price} </p>

              <div className=''>
                <div className="btn btn-primary " href="#" role="button"> Add To Cart</div>
              </div>
          </Link>
          )
            })
          } 
        </div>
      </div>
      </div>  {/* ------------End of Featured products----------- */}
     

      
      {/* ------------start of Main products----------- */}

      <div className='main-products'>

        <div className='container'>
          <h4 className='py-4'>All Products</h4>
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

      </div> {/* ------------End of Main products----------- */} 

  </div>
  )
}

export default Products