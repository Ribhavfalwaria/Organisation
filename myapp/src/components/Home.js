import React, { useState,useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FaShoppingBag } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { CgOrganisation } from 'react-icons/cg';
import Navbar from './Navbar';
import Organisation from './Organisation';
import Apps from './Apps';
import Settings from './Settings';
import Account from './Account';
import { UserContext } from "../App";

function Home() {
    const { userName } = React.useContext(UserContext);
    console.log("Using Context Api",userName);
    const [apidata, setapidata] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:1234/read/${userName}`)
            .then((response) => response.json())
            .then((data) => {
                setapidata(data);
            });
    },[]);
    console.log(apidata);
    
    const [Content, setContent] = useState('')
    function test(Content) {

        if (Content === 'apps') {
            return <Apps data={apidata} />
        }
        else if (Content === 'settings') {
            return <Settings />
        }
        else if (Content === 'account') {
            return <Account />
        }
        else if (Content === 'organisation') {
            return <Organisation data={apidata} email={userName}/>
        }
    }
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2  col-xs-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

                        <div className='ms-3 d-none d-sm-block'>
                            <h1 >Demo</h1>
                            <span>Business Portal</span>
                        </div>
                        <AiOutlineMenu className='d-block d-sm-none' />


                        <div>

                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start list-group" id="menu">
                                <li className="list-group-item bg-transparent text-white fw-bold" onClick={() => { setContent('organisation') }} style={{ cursor: "pointer" }}>

                                    <CgOrganisation /> <span className='d-none d-sm-inline'>Organisations</span>
                                </li>


                                <li className="list-group-item bg-transparent text-white fw-bold" onClick={() => { setContent('apps') }} style={{ cursor: "pointer" }}>

                                    <FaShoppingBag /> <span className='d-none d-sm-inline'>Apps</span>
                                </li>


                                <li className="list-group-item bg-transparent text-white fw-bold">

                                    <BsPersonFill /> <span className='d-none d-sm-inline' onClick={() => { setContent('account') }} style={{ cursor: "pointer" }}>Account</span>
                                </li>
                                <li className="list-group-item bg-transparent text-white fw-bold">
                                    <IoMdSettings /> <span className='d-none d-sm-inline' onClick={() => { setContent('settings') }} style={{ cursor: "pointer" }}>Settings</span>
                                </li>




                            </ul>
                            <hr />
                            <div className="dropdown pb-4">
                                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                                    <span className="d-none d-sm-inline mx-1">loser</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                    <li><a className="dropdown-item" href="#">New project...</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col py-3">
                    <Navbar />
                    <br/>
                    {
                        test(Content)
                    }

                </div>
            </div>

        </div>

    )
}

export default Home