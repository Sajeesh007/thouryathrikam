import React, { createContext, useState, useContext} from 'react'

const AuthContext = createContext()

export function useAuth(){
  return useContext(AuthContext)
}



export function Context({children, user}) {

  const [auth, setAuth] = useState(user)


  return (
    <>
      
    </>
  )
}

