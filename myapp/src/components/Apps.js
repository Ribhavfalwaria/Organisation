import React,{useState} from 'react'

import { HiOutlineArrowLeft } from 'react-icons/hi'
import Modal from 'react-bootstrap/Modal';
import { UserContext } from "../App";
function Apps(props) {
  const { userName } = React.useContext(UserContext);
  const [show, setShow] = useState(false);
  const [name, setname] = useState('')
  const [data, setdata] = useState([])
  const [object, setobject] = useState({})
  const [description, setdescription] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function set(obj) {
    console.log("APP",props.data);
    console.log("Current",object);
    console.log(obj);
    let a = [...props.data.organisations]
    a.forEach((obj)=>{
      if( obj.createdBy===object.createdBy){
          obj.apps.push({name: name, description: description})
        }
        })
        const requestOptions = {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(a)
          };
           fetch(`http://localhost:1234/update/${userName}`, requestOptions)
          .then(response => response.json())
          .then(data => {console.log("updated",data)})
  }

 
 
 
  
  
  return (
    <div>
        <div className="d-flex justify-content-between" >
                < h1>Apps</h1>
                
            </div>
            <br/>
            {
              props.data.organisations.map((obj)=>{
                return <div >
                  
                  <div className="d-flex justify-content-between">
                <h1>{obj.name}</h1>
                <button type="button" className="btn text-white"  style={{ background: '#4e48e3', height: '36px', textAlign: 'center', alignItems: 'center' }} onClick={()=>{
                  setdata(obj.apps)
                  setobject(obj)
                  handleShow()
                  
                }}>Add App</button>
            </div>
            <div className='d-flex justify-content-between'>
                  {obj.apps.map((app)=>{
                  return <div class="card"  style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">{app.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{app.description}</h6>
                    
                  </div>
                </div>
                })}</div></div>
              })
            }
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
                            <label class="form-check-label" for="exampleCheck1">I have read and agreed with <a href='#'>Terms and Conditions</a></label>
                        </div> <br />
                        <button type="button" className="btn text-white" style={{ background: '#4e48e3', height: '36px', textAlign: 'center', alignItems: 'center' }} onClick={()=>{set(data)}}>Add Your App</button>
                    </form>
                </Modal.Body>

            </Modal>
    </div>
  )
}

export default Apps