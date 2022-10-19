import React from 'react'
import {useState} from 'react';
function Pages() {
    const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const Submit = () => {
    alert("login sucessful")
  };
  return (
    <div>
        <div>
  <label>EMAIL</label>
  <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
  </div>
<div>
  <label>PASSWORD</label>
  <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} >
</input>
  </div>
  <button onClick={Submit}>SUBMIT</button>   
    </div>
  )
}

export default Pages
