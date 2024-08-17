import React, { useState } from 'react'
import DbService from '../../services/DbService';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [data, setData] = useState({
        // sNo: 0,
        uname: "",
        uId: "",
        uPass: "",
    });

    const navigate = useNavigate();
    function submitForm(e) {
        // alert('clicked')
        // e.preventDefault();
        if (data.uname === "" || data.uId === "" || data.uPass === "") {
            alert('fill all fields')
        }
        else {
            let users = {
                name: data.uname, userId: data.uId, password: data.uPass
            };

            DbService.addUsers(users)
                .then(res => {
                    //
                })
                .catch(err => {
                    console.log(err)
                })
            // console.log('done');
            // console.log(JSON.stringify(users));

            setData({
                uname: "",
                uId: "",
                uPass: "",
            });
        }
    }
    const cancel = (e) => {
        e.preventDefault();
        setData({
            uname: "",
            uId: "",
            uPass: "",
        });
    }
    
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        // console.log(newdata);
    }
    return (
        <div className="container">
            <div>
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand">Registration</a>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            <div className="row">

                <div className="card col-md-6 offset-md-3 offset-md">

                    <h3 className="text-center text-primary">Register New User</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Name:</label><br />
                                <input placeholder='Enter your Name' name="uname" id="uname" className="form-control" value={data.uname} onChange={(e) => handle(e)} />
                            </div>
                            <div className="form-group">
                                <label>Create User Id:</label><br />
                                <input placeholder='User Id' name="uId" id="uId" className="form-control" value={data.uId} onChange={(e) => handle(e)} />
                            </div>
                            <div className="form-group">
                                <label>Create Password:</label><br />
                                <input placeholder='Create password' name="uPass" id="uPass" className="form-control" value={data.uPass} onChange={(e) => handle(e)} />
                            </div>
                            {/* <div className="form-group">
                                <label>Re Enter Password:</label><br />
                                <input placeholder='Re Enter Password' name="uPass" id="uPass" className="form-control" value={data.productDescription} onChange={(e) => handle(e)} />
                            </div> */}
                            <button type="submit" className="btn btn-success" onClick={(e) => submitForm(e)}>Save</button>
                            <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px",marginRight: "10px" }}>Cancel</button>
                            <a href="/">click if have account or registered</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register