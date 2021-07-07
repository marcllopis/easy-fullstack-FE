import React, {useContext, useEffect} from 'react';
import {MyContext} from '../context/MyProvider';

const Profile = props => {

  const context = useContext(MyContext)

  useEffect(()=> {
    fetch('http://localhost:5000/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${context.token}`
      }
    })
      .then(response => response.json())
      .then(data => context.setUser(data))
  }, [])

  return(
    context.token
      ? <div>
        <h1>Personal Info</h1>
        <h3>username: {context.user.username} </h3>
        <h3>description: {context.user.description} </h3>
        <h3>age: {context.user.age} </h3>
        <h3>city: {context.user.city} </h3>
      </div>
      : <h1>You need to login first!</h1>
  )
}

export default Profile;
