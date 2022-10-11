import React from 'react'

function Createuser() {
  return (
   <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <label>Username</label>
          <input type={"text"}class="form-control"/>
        </div>
      </div>
      <div class="col-lg-6">
      <div class="form-group">
          <label>Email</label>
          <input type={"text"}class="form-control"/>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <label>Country</label>
          <select class="form-control">
            <option>India</option>
            <option>America</option>
            <option>China</option>
          </select>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <label>City</label>
          <select class="form-control">
            <option>India</option>
            <option>America</option>
            <option>China</option>
          </select>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <label>State</label>
          <select class="form-control">
            <option>India</option>
            <option>America</option>
            <option>China</option>
          </select>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <label>Phone</label> 
          <input type={"number"} class="form-control"/>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <label>Date of Birth</label> 
          <input type={"Date"} class="form-control"/>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <label>Gender</label> 
          <select class="form-control">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
        <input type={"submit"} class="btn btn-primary"/>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Createuser