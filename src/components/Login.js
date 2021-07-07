import React, { useContext, useState } from 'react';
import { MyContext } from '../context/MyProvider';
import Input from './atoms/Input';

const userInputs = ['username', 'password']

const inputType = {
  password: 'password',
  username: 'text'
}

const Login = props => {
  // let [user, setUser] = useState('')
  // let [password, setPassword] = useState('')
  let [user, setUser] = useState({
    username: '',
    password: ''
  })

  const context = useContext(MyContext)

  const handleForm = event => {
    event.preventDefault();
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(user)
    })
      .then(response => {
        if (response.status === 200)
          response.json()
            .then(data => {
              context.setToken(data.token)
              context.setIsLogged(true)
              props.history.push('/profile')
            })
      })

  }


  return (
    <form onSubmit={handleForm}>

      {
        userInputs.map((input, index) =>
          <Input
            key={index}
            user={user}
            input={input}
            inputType={inputType}
            setUser={setUser}
          />
        )
      }
{/*
      <input
        value={user}
        onChange={(event) => setUser(event.target.value)}
        placeholder='username...'
      />
      <br />
      <input
        value={password}
        type='password'
        onChange={(event) => setPassword(event.target.value)}
        placeholder='password...'
      /> */}
      <br />
      <button>Login</button>
    </form>
  )
}

export default Login;
