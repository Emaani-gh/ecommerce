import React, { useEffect, useState } from 'react'
var Buffer = require('buffer/').Buffer 
// var btoa = require('btoa')

function Testing() {

    const [products,setProducts] = useState([])

    const fetchProducts = ()=>{
        fetch('http://localhost:3000/api/products/')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    }

    useEffect(()=>{
        fetchProducts()
    },[])
    
  return (
    <div>
        {
            products.map(product=>{
                let { productId,productName, productPrice,productImg} = product
                const Stringbuffer = new Buffer(productImg.data).toString("base64");
                // console.log(singleData);


                return(
                    
                    <div key={product.productId}>
                    <div className=''>
                <img className='w-100' src={`data:image/png;base64,${Stringbuffer}`}/>
              </div>
              
              <div className='desc' >
                <p className="display-5 fs-5 mb-0 "> {product.productName}</p>
    
                
                
              </div>
              <p className='mb-0 fs-5'> Ghs {product.productPrice} </p>

              <div className=''>
                <div className="btn btn-primary " href="#" role="button"> Add To Cart</div>
              </div>

                    {/* <h1>product ID:{productId}</h1>
                    <h1>product name:{productName}</h1>
                    <h1>product Price :{productPrice}</h1>
                    <img src={`data:image/png;base64,${Stringbuffer}`}/> */}
                    </div>
                )
                
            })
        }
    </div>
  )
}

export default Testing