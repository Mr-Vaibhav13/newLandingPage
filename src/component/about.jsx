import React, { Component } from 'react';
import "../App.css";
import sha from "../image/sha.jpg"
import tus from "../image/tus.jpg"
import yas from "../image/yas.jpg"
import vai from "../image/vai.jpg"


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='container'>
            <h3 className='h'>Our Team</h3>
            <h2 className='hh'>Crypto Hunters</h2>
            <h6 className='hhhh'>We are the students of ABES Engineering College</h6>
        </div>

        <div id="info" class="container">
  <div class="row">
    <div class="col">s
    <img class="colss" src={yas} alt="mockup" />
    <h5 class="pp">Yashwsi Singh</h5>
    </div>
    <div class="col">
    <img class="colss tuss" src={tus} alt="mockup" />
    <h5 class="pp">Tushar Chauchan</h5>
    </div>
    <div class="col">
    <img class="colss" src={sha} alt="mockup" />
    <h5 class="pp">Shashank Sharma</h5>
    </div>
    <div class="col">
    <img class="colss" src={vai} alt="mockup" />
    <h5 class="pp">Vaibhav Sharma</h5>
    </div>
  </div>
</div>
      </div>
    )
  }
}
