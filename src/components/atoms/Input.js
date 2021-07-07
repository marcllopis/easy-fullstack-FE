import React from 'react';

const Input = props => (
  <input
    value={props.user[props.input]}
    type={props.inputType[props.input]}
    onChange={(event) => props.setUser({
      ...props.user,
      [props.input]: event.target.value
    })}
    placeholder={`${props.input}...`}
    style={{display:'block', margin:'5px'}}
  />
)

export default Input;

