import React, { useEffect,useState } from 'react'

export const Context = React.createContext();
export const Consumer = Context.Consumer



export const Provider = (props)=> {
  
  const [cart,setCart] = useState([])
  const [currproduct,setCurrProduct] = useState({})
  const [checkedProducts,setCheckedProducts] = useState([])
  const [products,setProducts] = useState([])

  useEffect(()=>{
    fetchProducts('products')
  },[])

  const fetchProducts = (prdquery)=>{
    fetch(`https://fakestoreapi.com/${prdquery}`)
      .then(res=>res.json())
      .then(data=>setProducts(data))
  }
  

  const addToCart = (product)=>{
    const is = cart.some(ele=>ele.id==product.id)
    if(is == false){
      setCart(prev=>[...prev,product])
    }
  }

  const showProduct = (product)=>{
    setCurrProduct(product)
  }
  
  const handleCheck = (e)=>{
    let value = e.target.value
    const is = checkedProducts.includes(value)
    let checked = e.target.checked
    
    if(checked && !is){
      setCheckedProducts(prev=>[...prev,value])
    }
    else if (checked == false && is == true){
      let index = checkedProducts.indexOf(value)
      checkedProducts.splice(index,1)
      setCheckedProducts(prev=> prev.filter(val=>val != value))
    }
  }
  
  const handleAddSelectedToCart = ()=>{
    checkedProducts.forEach((prd)=>{
      const selectedPrd=products.find((ele)=>ele.id == prd)
      addToCart(selectedPrd)
    })
  }

  const value ={
    actions : {
      handleCheck,
      addToCart,
      showProduct,
      handleAddSelectedToCart
    },

    state :{
      products,
      cart,
      currproduct,
      checkedProducts
    }
    
    
  }
  return (
    <Context.Provider value={value}>
        
        {props.children}
    </Context.Provider>
  )

}

export default Context