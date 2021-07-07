import React, { useContext } from 'react';
import {MyContext} from '../context/MyProvider';

const Home = () => {
  const context = useContext(MyContext)

  return (
    context.isLogged
      ? <h1>Hey welcome back to home page!</h1>
      : <h1>Hey! Welcome to this site, do you want to register?</h1>
  )
}

export default Home;
