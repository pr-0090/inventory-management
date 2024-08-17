import React from 'react'


function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function HeaderComponent() {
    return (
        <div>
            <div className="header ">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-0">
                    <div className="container-fluid">
                        <a className="navbar-brand text-warning" href="#firstPage">MyApp</a>
                        <button className="navbar-toggler btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item ">
                                    <a className="nav-link active text-warning" aria-current="page" href="#firstPage">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-warning" href="#Contact">Contact</a>
                                </li>

                            </ul>
                            <li className="nav-item ">
                                <button className='btn btn-warning text-dark mt-2' onClick={openForm}>Goto App</button>
                            </li>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default HeaderComponent