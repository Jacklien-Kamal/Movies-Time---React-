import React, { useState, useEffect } from 'react';
import { registerUser } from '../../services/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export const Register = () => {
    const navigate=useNavigate()

    const [users, setUsers] = useState({
       
       name:'',
        email: '',
        userName:'',
        password: '',
        conFirmPassword:''
    })


    const [errors, setErrors] = useState({
        nameError:'',
        emailError: '',
        userNameErrors:'',
        passwordError: '',
        ConfirmpPasswordError: ''

    })

    const detectChange = (e) => {
        const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
        const passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/
        if((e.target.name == 'name')){
            setUsers({name: e.target.value,email: users.email, userName: users.userName, password: users.password, conFirmPassword: users.conFirmPassword  })
            setErrors({ ...errors, nameError: (e.target.value.length == 0) ? "Name is required":''})

        }
        else if (e.target.name == 'email') {
            setUsers({ name:users.name ,email:e.target.value , userName:users.userName, password: users.password, conFirmPassword: users.conFirmPassword })
            setErrors({ ...errors, emailError: (e.target.value.length == 0) ? "E-mail is required" : (emailRegex.test(e.target.value)) ? "" : 'invalid email' })
        }
        else if (e.target.name == 'userName') {
            setUsers({ name:users.name ,email: users.email, userName:e.target.value, password: users.password, conFirmPassword: users.conFirmPassword })
            setErrors({ ...errors, userNameErrors: (e.target.value.length == 0) ? " is required" : (e.target.value.includes(' ')) ? "invalid" : '' })
        }
        else if (e.target.name == 'password') {
            setUsers({ name:users.name ,email: users.email, userName:users.userName, password:e.target.value, conFirmPassword: users.conFirmPassword })
            setErrors({ ...errors, passwordError: (e.target.value.length == 0) ? "password is required" : (passRegex.test(e.target.value)) ? "" : 'invalid' })
        }
        else if (e.target.name == 'conFirmPassword') {
            setUsers({ name:users.name ,email: users.email, userName:users.userName, password: users.password, conFirmPassword: e.target.value})
            setErrors({ ...errors, ConfirmpPasswordError: (e.target.value.length == 0) ? " is required" : (!(e.target.value==users.password)) ? "not match" : '' })
        }
        
    }
    const register =async (e) => {
        e.preventDefault()
        if(!errors.emailError && !errors.passwordError&& !errors.nameError && !errors.userNameErrors&& !errors.ConfirmpPasswordError){
            try{
                toast('Done !',{  icon: '👏',  style: {    borderRadius: '10px',    background: '#333',    color: '#fff',  },});
                await registerUser(users.email,users.password)
                navigate('/login')
           
            }catch(error){ toast.error('faild')}
            
        }else{
            toast.error('Invalid email or password.');
        }
    }

    return <>
    <div className='container col-6 mt-5 border p-4 bg-dark rounded-4 '>

        <h1 className='text-light'>Register !!</h1>
        <form onSubmit={(e) => { register(e) }}>

        <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" name='name'
                    onChange={(e) => { detectChange(e) }}
                    value={users.name}
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
            </div>
            <p className="text-danger">{errors.nameErrors}</p>


            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" name='email'
                    onChange={(e) => { detectChange(e) }}
                    value={users.email}
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <p className="text-danger">{errors.emailError}</p>

            <div className="form-group">
                <label for="exampleInputEmail1">User Name </label>
                <input type="text" class="form-control" name='userName'
                    onChange={(e) => { detectChange(e) }}
                    value={users.userName}
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username" />
            </div>
            <p className="text-danger">{errors.userNameErrors}</p>



            <div class="form-group my-3">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" name='password'
                    onChange={(e) => { detectChange(e) }}
                    value={users.password}
                    id="exampleInputPassword1" placeholder="Password" />
            </div>
            <p className="text-danger">{errors.passwordError}</p>

            <div class="form-group my-3">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input type="password" className="form-control" name='conFirmPassword'
                    onChange={(e) => { detectChange(e) }}
                    value={users.conFirmPassword}
                    id="exampleInputPassword1" placeholder="Confirm Password" />
            </div>
            <p className="text-danger">{errors.ConfirmpPasswordError}</p>

            <button type="submit" className="btn btn-success">Register</button>
        </form>
        <Toaster  position="top-center"/>
        </div>
    </>
}