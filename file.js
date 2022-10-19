import React from 'react';
import {useState} from 'react';
function File(props) {
    const [firstName,setFirstName]=useState('');
    console.log(props.data)
    console.log(props.firstName)
    
  return (
    <div>
       
       <p value={firstName} onChange={(e) => setFirstName(e.target.value)} ></p>  
    </div>
  )
}

export default File
