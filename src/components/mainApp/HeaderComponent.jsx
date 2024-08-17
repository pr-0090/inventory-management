import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderComponent() {
    const navigate=useNavigate();
    
    const logout=()=>{
        localStorage.clear();
        navigate('/')
    }

    const username=localStorage.getItem("userName");
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand btn-warning rounded" href="#">MyApp</a>
                <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item ">
                            <a className="nav-link active text-warning" aria-current="page" href="/">Home</a>
                        </li>
                        
                        {/* <li className="nav-item ">
                            <a className="nav-link text-warning" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle text-warning" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item text-warning" href="#">Action</a></li>
                                <li><a className="dropdown-item text-warning" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider text-warning" /></li>
                                <li><a className="dropdown-item text-warning" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item ">
                            <a class="nav-link disabled text-warning" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    
                    <form className="d-flex justify-content-center col-lg-4 col-sm-6 float-right">
                        {/* <label htmlFor="" className='text-white'>welcome Mr Virat Kohli</label> */}
                        {/* <input className="form-control me-2  " type="search" placeholder="Search" aria-label="Search" /> */}
                        <label htmlFor="" className='me-2 text-white'>Welcome {username}</label>
                        {/* <button className="btn-outline-warning rounded" type="submit">Search</button> */}
                        <button className='btn-outline-success rounded' onClick={()=>logout()}>Logout</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent