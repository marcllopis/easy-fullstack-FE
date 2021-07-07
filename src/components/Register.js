import React, { useEffect, useState } from 'react';
import Input from './atoms/Input';

const userInputs = ['username', 'password', 'description', 'age', 'city']

const inputType = {
  age: 'number',
  password: 'password',
  username: 'text',
  description: 'text',
  city: 'text'
}

const Register = () => {
  // let [user, setUser] = useState('')
  // let [password, setPassword] = useState('')
  // let [description, setDescription] = useState('')
  // let [age, setAge] = useState('')
  // let [city, setCity] = useState('')

  let [user, setUser] = useState({
    username: '',
    password: '',
    description: '',
    age: '',
    city: ''
  })


  const handleForm = event => {
    event.preventDefault();
    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(user)
    })
      .then(response => {
        if (response.status === 201) alert('it worked!')
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

      {/* <h1>Old inputs</h1>
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
      />
      <br />
      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder='description...'
      />
      <br />
      <input
        value={age}
        type='number'
        onChange={(event) => setAge(event.target.value)}
        placeholder='age...'
      />
      <br />
      <input
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder='city...'
      /> */}
      <br />
      <button>Register</button>
    </form>
  )
}

export default Register;
