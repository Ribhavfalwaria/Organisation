import React,{useState} from 'react'

import { onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";

 
function Register() {
    const [email, setEmail] = useState("");
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [country, setcountry] = useState("");
    const [State, setState] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate()
    function PostData() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname:fname,
                lastname:lname,
                country:country,
                state:State,
                email:email,
                id:email
            })
        };
        fetch(`http://localhost:1234/createuser`, requestOptions)
            .then(response => response.json())
            .then(data => {console.log(data)})
        
    }
    // const navigate = useNavigate();
    const handleSignin =async()=>{
      console.log(email,password);
      try {
       PostData()
        await createUserWithEmailAndPassword(firebaseAuth,email,password)
        onAuthStateChanged(firebaseAuth,(currentUser)=>{
              if(currentUser){navigate("/")}
            })
      } catch (err) {
        console.log(err);
      }
    };

    
  return (
        
    <div> 

         <div className="content d-flex  justify-content-center align-middle mx-auto my-auto text-center" >
    <form class="form-group d-flex flex-column w-25 justify-content-center"
    >
        <h4>Register Here</h4>
        <div className=' form-group d-flex flex-column'>
            <label for="exampleInputEmail1" style={{ textAlign: "left" }}>First Name </label><t />

            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" onChange={(e) => setfname(e.target.value)}
                value={fname} />
        </div>
        <br />
        <div className=' form-group d-flex flex-column'>
            <label for="exampleInputEmail1" style={{ textAlign: "left" }}>Last Name </label><t />

            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" onChange={(e) => setlname(e.target.value)}
                value={lname} />
        </div>
        <br />
        <div className=' form-group d-flex flex-column'>
            <label for="exampleInputEmail1" style={{ textAlign: "left" }}>Country </label><t />

            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Country" onChange={(e) => setcountry(e.target.value)}
                value={country} />
        </div>
        <br />
        <div className=' form-group d-flex flex-column'>
            <label for="exampleInputEmail1" style={{ textAlign: "left" }}>State </label><t />

            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="State" onChange={(e) => setState(e.target.value)}
                value={State} />
        </div>
        <br />

        <div className=' form-group d-flex flex-column'>
            <label for="exampleInputEmail1" style={{ textAlign: "left" }}>Email </label><t />

            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}
                value={email} />
        </div>
        <br />
        <div className=' form-group d-flex flex-column'>
            <label for="exampleInputEmail1" style={{ textAlign: "left" }}>Password </label><t />
            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setPassword(e.target.value)} value={password} type="password"placeholder="Password" />
        </div>
        <br />
        <button type="button" className="btn text-white" style={{ background: '#4e48e3', height: '36px', textAlign: 'center', alignItems: 'center' }} onClick={handleSignin}>Signup</button>
    </form>



</div></div>
  )
}

export default Register