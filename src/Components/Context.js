import React, { useEffect,useState } from 'react'

export const Context = React.createContext();
export const Consumer = Context.Consumer

export const Provider = (props)=> {
  
  const [cart,setCart] = useState([])
  const [currproduct,setCurrProduct] = useState({})
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
    const isFound = cart.find(ele=>ele.id==product.id);
    if(!isFound){
      setCart(prev=>[...prev,product])
    }
    else{
      console.log(product.id + "already added")
    }
  }

  const showProduct = (product)=>{
    setCurrProduct(product)
  }
  
  const handleCheck = (e)=>{
    let value = e.target.value
    const is = products.find(prd=>prd.id == value)
    let checked = e.target.checked
    
      setProducts(current =>
        current.map(obj => {
          if (obj.id == value) {
            return {...obj, checked: e.target.checked};
          }

          return obj;
        }),
      );
  }
  
  const handleAddSelectedToCart = ()=>{
    
    let prds = products.filter(ele=>ele.checked == true)
    prds.forEach(prd=>addToCart(prd))
    setProducts(current =>
      current.map(obj => {
        if (obj.checked == true) {
          return {...obj, checked: false};
        }

        return obj;
      }),
    );
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
    }
    
    
  }
  return (
    <Context.Provider value={value}>
        
        {props.children}
    </Context.Provider>
  )

}

export default Context