import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { UserContext } from "../App";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            setUserName(email)
          await signInWithEmailAndPassword(firebaseAuth, email, password);
          onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
              console.log('OnAuthStateChanged USER', user);
             console.log("user is login ")
             navigate("/home")
            
            } })
        } catch (error) {
          console.log(error.code);
        }
      };
    
    const { userName, setUserName } = React.useContext(UserContext);
    return (
        <div className="content d-flex  justify-content-center align-middle mx-auto my-auto text-center" >
                    <form class="form-group d-flex flex-column w-25 justify-content-center"
                    >
                        <h4>Add Your App</h4>

                        <div className=' form-group d-flex flex-column'>
                            <label for="exampleInputEmail1" style={{ textAlign: "left" }}>Name </label><t />

                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => {
                                
                                setEmail(e.target.value) }}
                                value={email} />
                        </div>
                        <br />
                        <div className=' form-group d-flex flex-column'>
                            <label for="exampleInputEmail1" style={{ textAlign: "left" }}>Password </label><t />
                            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setPassword(e.target.value)} value={password} type="password"placeholder="Password" />
                        </div>
                        <br />
                        <button type="button" className="btn text-white" style={{ background: '#4e48e3', height: '36px', textAlign: 'center', alignItems: 'center' }} onClick={handleLogin}>Login</button>
                        <br/>
                        <button type="button" className="btn text-white" style={{ background: '#4e48e3', height: '36px', textAlign: 'center', alignItems: 'center' }} onClick={()=>{navigate("/register")}}>Register</button>
                    </form>
               

            
        </div>
    );
}


export default Login;