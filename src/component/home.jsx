import React, { Component } from 'react';
import "../App.css";

export default class Home extends Component {
  render() {
    return (
      <div>
           <div id="r" class="row">
    <div class="col-lg-6">
      <h1 class="one">All In One Crypto Info</h1>
      <h1 class="one">Platform</h1>
      <h5 class="one" id="two">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet.</h5>
      {/* <button type="button" class="btn btn-dark"> Download</button>
      <button type="button" class="btn btn-outline-light">Download</button> */}
      <button type="button" class="btn btn-primary btn-lg">DASHBOARD</button>
    </div>
    <div class="col-lg-6">
      <img class="colss" src="../image/homeimg.png" alt="mockup" />
    </div>
  </div>       
  </div>
    
    )
  }
}
