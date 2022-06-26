import React, { useEffect,useState } from 'react'

export const Context = React.createContext();
export const Consumer = Context.Consumer



export const Provider = (props)=> {
  const [products,setProducts] = useState([])


  const fetchProducts = (categ)=>{
    fetch(`https://fakestoreapi.com/${categ}`)
      .then(res=>res.json())
      .then(data=>setProducts(data))
  }

  useEffect(()=>{
    fetchProducts('products')
  }, []
  )
  
  

  return (
    <Context.Provider value={products} >
        
        {props.children}
    </Context.Provider>
  )

}

export default Context