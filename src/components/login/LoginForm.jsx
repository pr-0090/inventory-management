import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import DbService from '../../services/DbService'

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function LoginForm() {

    const [usersName, setUsersName] = useState([]);

    useEffect(() => {
        DbService.getUsers()
            .then(res => {
                setUsersName(res.data)
                //  console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const navigate = useNavigate();
    function loginSuccess() {
        var uname = document.getElementById("email").value;
        var pass = document.getElementById("psw").value;

        const usercheck = usersName.find(user => (user.name === uname && user.password === pass))
        if (usercheck) {
            localStorage.setItem("userName",uname);
            localStorage.setItem("password",pass);
            navigate('app-component');
            
        }
        else {
            alert("User name not exist");
        }
    }
    return (
        <div className="form-popup " id="myForm">
            <form className="form-container bg-dark text-warning rounded">
                <h1>Login</h1>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" id="email" required className='text-dark' />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="psw" required className='text-dark' />
                <div>
                    <a href="/register" style={{ color: 'white', fontSize: '3vh' }}>new user click to register</a>
                </div>
                <div>
                    <button type="submit" className="w-100 h-50 btn-outline-warning rounded " onClick={loginSuccess}>Login</button><br /><br />
                    <button type="button" className="w-100 btn-outline-danger rounded" onClick={closeForm}>Close</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm