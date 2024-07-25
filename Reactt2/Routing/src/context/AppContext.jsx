import React, {createContext, useState } from 'react'

const GlobalConstant = createContext();
export const useGlobalContext = ()=>
function AppContext({children})
{

    const [name,setName] = useState("Ishu")
  return (
      <GlobalConstant.Provider value={{name,setName}}>
           {children}
      </GlobalConstant.Provider>
    
  )
}

export default AppContext