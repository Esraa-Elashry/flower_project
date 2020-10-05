import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import shop from  './img/shop.jpg'
import face from './img/facebook.png'
import twitter from './img/twitter.png'
import insta from './img/instagram.png'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <br/>
             
<footer class="page-footer font-small stylish-color-dark bg-light pt-4">

     <div class="container text-center text-md-left">
          <div class="row">
             <div class="col-md-4 mx-auto">
                  <h3 class="font-weight-bold  mt-3 mb-4 text-success"> OUR Adress : </h3>
               <p class="h5">we ara in mansoura , cairo  and mahalla ,, We hope you visit us in all our branches :) </p>
               
               <p class="h3 text-danger">YOUR WELCOME !</p>

    </div>
    

    <hr class="clearfix w-100 d-md-none"/>

   
    <div class="col-md-2 mx-auto">

      <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Visit us</h5>

      <ul class="list-unstyled">
        <li>
         Monda
        </li> 
        <li>
        Tuesday
        </li>
        <li>
        Wednesday
        </li>
        <li>
        Thursday
        </li>
        <li>
        Friday
        </li> <li>
        Saturday
        </li>
         <li>
  Sunday
        </li>
      </ul>

    </div>
    

    <hr class="clearfix w-100 d-md-none"></hr>

  
    <div class="col-md-2 mx-auto">

      
      <h5 class="font-weight-bold text-uppercase mt-3 mb-4">date</h5>

      <ul class="list-unstyled">
        <li>
        11:00 - 18:00
        </li>
        <li>
       11:00 - 18:00
        </li>
        <li>
          11:00 - 18:00
        </li>
        <li>
          11:00 - 18:00
        </li>
        <li>
          11:00 - 18:00
        </li> <li>
          11:00 - 18:00
        </li> <li>
        closed
        </li>
      </ul>

    </div>
    

    <hr class="clearfix w-100 d-md-none"/>

    
    <div class="col-md-2 mx-auto">

     
      <h5 class="font-weight-bold text-uppercase mt-3 mb-4"></h5>

      <img src={shop} width="270px" height="240px "  class="img rounded"/>

    </div>
 

  </div>
  

</div>


<hr/>




<ul class="list-unstyled list-inline text-center">
  <li class="list-inline-item">
    <a class="btn-floating btn-fb mx-1" href="https://www.facebook.com/">
      <img src={face} class="img circle"  width="100px" height="80px"/>
    </a>
  </li> &nbsp;&nbsp;&nbsp;
  <li class="list-inline-item">
    <a class="btn-floating btn-tw mx-1" href="https://twitter.com/" >
    <img src={twitter} class="img circle"  width="100px" height="80px"/>
    </a>
  </li>&nbsp;&nbsp;&nbsp;
  <li class="list-inline-item">
    <a class="btn-floating btn-gplus mx-1" href="https://www.instagram.com/">
    <img src={insta} class="img circle" width="100px" height="80px" />
    </a>
  </li>
 
</ul>
<br/>

<div class="footer-copyright text-center py-3">© 2020 Copyright:
  <span> my team</span>
</div>
</footer>

</div>

         );
    } 
}
 
export default Footer;