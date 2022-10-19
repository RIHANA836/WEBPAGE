
import {useState} from 'react';
import File from './file';


function Login(){
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const Submit = () => {
    console.log(password,confirmPassword)
    if(password.length <= 8 && password===confirmPassword)
    alert("successfully submitted")
    else
    alert("invalid")
  };
  const log = () => {
    
}
    return(
<div>

 <div>   
<label>FIRST NAME</label>
<input value={firstName} onChange={(e) => setFirstName(e.target.value)} ></input>
</div>
<div>
  <label>LAST NAME</label>
  <input value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
  </div>
<div>
  <label>EMAIL</label>
  <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
  </div>
<div>
  <label>PASSWORD</label>
  <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}>
</input>
  </div>
<div>
  <label>CONFIRM PASSWORD</label>
  <input value={confirmPassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)} 
></input>
</div>

<button onClick={Submit}>SUBMIT</button>
<p>already having account </p>
        <button onClick={log} ><a href ="pages" onClick={log}>LOGIN</a></button>

<File data="hai" firstName={firstName}/>




</div>
    )
}
export default Login;

