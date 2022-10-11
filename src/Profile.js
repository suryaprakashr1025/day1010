import React from 'react'
import { useParams } from 'react-router-dom'
function Profile() {
  const params=useParams()
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
            id{params.id}
        </div>
        <div class="col-lg-6">
        username:surya
        </div>
        <div class="col-lg-6">
        email:surya@gmail.com
        </div>
        <div class="col-lg-6">
        country:india
        </div>
        <div class="col-lg-6">
        city:coimbatore
        </div>
        <div class="col-lg-6">
        state:tamilnadu
        </div>
        <div class="col-lg-6">
        phone:9566953853 
        </div>
        <div class="col-lg-6">
        dateofbirth:15.4.1998
        </div>
        <div class="col-lg-6">
        gender:male 
        </div>
      </div>
      </div>
  )
}

export default Profile