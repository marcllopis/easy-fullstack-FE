import React, {useState} from 'react';

export const MyContext = React.createContext();

const MyProvider = props => {
  let [user, setUser] = useState({})
  let [isLogged, setIsLogged] = useState(false)
  let [token, setToken] = useState('')

  return (
    <MyContext.Provider
      value={{
        user,
        isLogged,
        token,
        setUser,
        setIsLogged,
        setToken
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyProvider;
