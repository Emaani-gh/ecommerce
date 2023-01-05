import React, { useEffect,useState } from 'react'

export const Context = React.createContext();
export const Consumer = Context.Consumer



export const Provider = (props)=> {
  
  
  

  return (
    <Context.Provider  >
        
        {props.children}
    </Context.Provider>
  )

}

export default Context