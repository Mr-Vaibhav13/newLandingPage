import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <form id="ff" class="row g-3">

    <div class="col-md-6">
    <label for="inputName4" class="form-label">Name</label>
    <input type="text" class="form-control" id="inputName4"/>
  </div>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
 

  <div class="col-12">
    <label for="inputAddress" class="form-label">Subject</label>
    <input type="text" class="form-control" id="inputAddress"/>
  </div>

  <div class="col-12">
    <label for="inputAddress2" class="form-label">Message</label>
    <textarea class="form-control" id="inputAddress2" rows="5" cols="50"/>
  </div>
  
  <div  id="bb" class="col-12">
    <button  type="submit" class="btn btn-primary">Send Message</button>
  </div>
</form>
      </div>
    )
  }
}
