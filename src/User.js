import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function User() {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        setUsers([
            {
                id:1,
                username:"surya",
                email:"surya@gmail.com",
                country:"india",
                city:"coimbatore",
                state:"tamilnadu",
                phone:"9566953853",
                dob:"15.4.1998",
                gender:"male"

            },
            {
                id:2,
                username:"prakash",
                email:"prakash@gmail.com",
                country:"india",
                city:"chennai",
                state:"tamilnadu",
                phone:"9566953853",
                dob:"20.4.1998",
                gender:"male"

            },

        ])
    })
  return (
    <div class="container-fluid">
         <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Users</h1>
                        <Link to ="/Createuser" type="button" class="btn btn-primary">Create User</Link>
 
                    </div>
                  
              
                        <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>username</th>
                                            <th>email</th>
                                            <th>country</th>
                                            <th>city</th>
                                            <th>state</th>
                                            <th>phone</th>
                                            <th>dob</th>
                                            <th>gender</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>username</th>
                                            <th>email</th>
                                            <th>country</th>
                                            <th>city</th>
                                            <th>state</th>
                                            <th>phone</th>
                                            <th>dob</th>
                                            <th>gender</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            users.map((user)=>{
                                                return <tr>
                                                <td>{user.id}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.country}</td>
                                                <td>{user.city}</td>
                                                <td>{user.state}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.dob}</td>
                                                <td>{user.gender}</td>
                                                <td><Link to ={`/user/:${user.id}`}
                                                type="button" class="btn btn-warning">View</Link>
                                                <Link to ={`/edit/:${user.id}`}type="button" class="btn btn-primary">Edit</Link>
                                                <Link to ={`/profile/:${user.id}`}type="button" class="btn btn-danger">Profile</Link>
                                        </td>
                                            </tr>
                                            })
                                        }
                                        </tbody>
                                </table>
                                
                            </div>
                        </div>
                    </div>

                        </div>
            


  )
}

export default User