import { data } from 'jquery';
import React, { useState, useEffect } from 'react'
import {  FaUserAlt} from "react-icons/fa";
import { UserContext } from "../App";
function Account() {
  const [apidata, setapidata] = useState({});
  const { userName } = React.useContext(UserContext)
  useEffect(() => {
    fetch(`http://localhost:1234/createuser/${userName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Account", data);
        setapidata(data)
      });
  }, []);
  console.log(apidata.country);

  return (
    <div className='d-flex justify-content-between'>
      <div className="card" style={{width: "18rem",height:"10rem"}}>
        <div className="card-body">
          <FaUserAlt size={50}/>
          <h5 className="card-title">{apidata.firstname+' '+apidata.lastname}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{apidata.email}</h6>
          
        </div>
      </div>
      <div className="card mx-3" style={{width: "50rem"}}>
          <h1>Profile</h1>
        <div className="card-body">
          <div className='d-flex '>
          <label for="exampleInputEmail1" style={{ textAlign: "left" }}>Firstname </label><t />
          <input type="email" className="form-control mx-2" aria-describedby="emailHelp" placeholder="Enter email" value={apidata.firstname} />
          <label for="exampleInputEmail1" style={{ textAlign: "left" }}>Lastname </label><t />
          <input type="email" className="form-control  mx-2" aria-describedby="emailHelp" placeholder="Enter email"  style={{ width: "leautoft" }} value={apidata.lastname} />
          </div><br/>
          <div className='d-flex justify-content-between'>
          <label for="exampleInputEmail1" style={{ textAlign: "left" }}>Email Address </label>
          <input type="email" className="form-control  mx-2" aria-describedby="emailHelp" placeholder="Enter email"  style={{ width: "leautoft" }} value={apidata.email} />
          <label for="exampleInputEmail1" style={{ textAlign: "left" }}>Country </label><t />
          <input type="email" className="form-control mx-2" aria-describedby="emailHelp" placeholder="Enter email" value={apidata.country} />
          </div>
          <br/>
          <div className='d-flex justify-content-between'>
          <label for="exampleInputEmail1" style={{ textAlign: "left" }}>State </label>
          <input type="email" className="form-control mx-2" aria-describedby="emailHelp" placeholder="Enter email" value={apidata.state} />
          </div>
          
        </div>
      </div>

  
    </div>
  )
}

export default Account