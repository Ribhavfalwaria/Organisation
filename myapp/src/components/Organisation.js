import React from 'react'
import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { HiOutlineArrowLeft } from 'react-icons/hi'

import { UserContext } from "../App";
function Organisation(props) {
    const { userName } = React.useContext(UserContext);
    const [show, setShow] = useState(false);
    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [apidata, setapidata] = useState([]);
    console.log("Organisation ",props.data.organisations);
   
    


    function check() {
        let a = props.data
        a.organisations.push({
            createdBy: description,
            apps: [
                {
                    "description": "I am a Boy",
                    "name": "Arjun"
                }
            ],
            name: name,
            date: new Date()
        })
        console.log("checking a",a.organisations);
        const requestOptions = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(a.organisations)
      };
      fetch(`http://localhost:1234/update/${userName}`, requestOptions)
          .then(response => response.json())
          .then(data => {console.log("updated",data)})
        
      }

    

    function handleclick(obj) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };
        console.log(JSON.stringify(obj));
        fetch('http://localhost:1234/create', requestOptions)
            .then(response => response.json())
            .then(data => { console.log("Posted data", data) });
    }
    return (
        <div>
            <div className="d-flex justify-content-between">
                < h1>Organisation</h1>
                <button type="button" onClick={handleShow} className="btn text-white" style={{ background: '#4e48e3', height: '36px', textAlign: 'center', alignItems: 'center' }}>Create New Organisation</button>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">NAME</th>
                            <th scope="col">NUMBER OF APPS</th>
                            <th scope="col">CREATED BY</th>
                            <th scope="col">REGISTERATION DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                         {
                            props.data.organisations.map((obj)=>{
                                return  <tr>
                                <td>{obj.name}</td>
                                <td>{obj.apps.length}</td>
                                <td>{obj.createdBy}</td>
                                <td>{obj.date}</td>
                            </tr>
                            })
                            }


                        
                    </tbody>
                </table>
            </div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header >
                    <Modal.Title style={{ color: '#4e48e3',cursor:'pointer' }} onClick={handleClose}><HiOutlineArrowLeft size={20} /> <span style={{ fontSize: '15px' }}>DashBoard</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <form className="form-group d-flex flex-column ">
                        <h4 className='d-inline'>Create New Organisation</h4>

                        <div className=' form-group d-flex flex-column'>
                            <label for="exampleInputEmail1" style={{ textAlign: "left" }}>Name </label><t />
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Organisation"  onChange={(e) => {
                                
                                setname(e.target.value) }}
                                value={name} />
                        </div>
                        <br />
                        <div className=' form-group d-flex flex-column'>
                            <label for="exampleInputEmail1" style={{ textAlign: "left" }}>Description </label><t />
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"  onChange={(e) => {
                                
                                setdescription(e.target.value) }}
                                value={description}/>
                        </div>
                        <br />
                        <div className=' form-group d-flex flex-row'>
                            <input type="checkbox" className="form-check-input d-inline" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">I have read and agreed with <a href='#'>Terms and Conditions</a></label>
                        </div> <br />
                        <button type="button" className="btn text-white" style={{ background: '#4e48e3', height: '36px', textAlign: 'center', alignItems: 'center' }} onClick={check}>Create Organisation</button>
                    </form>
                </Modal.Body>

            </Modal>


        </div>
    )
}

export default Organisation