
import { useState } from "react"
import axios from "axios";

export default function LoginPage(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
 
  const handleSubmit = async (e)=>{
    e.preventDefault();
    
        const res = await axios.post('http://localhost:3002/login',{email,password});
        
        if(res.data.success){
            alert(`Login Successful`)
        }
        else{
            alert(`Login denied, ${res.data.message}`)
        }
    
    
    

  }

    return(
        <>
            <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}

            />
            <div id="emailHelp" className="form-text">
              We will never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
        </>
    )
}