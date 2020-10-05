import React from 'react';
import ReactDOM from 'react-dom';
//import './home.css'

import img from './img/about1.jpg'
import img2 from './img/about2.jpg'
import img3 from './img/about3.jpg'
import img4 from './img/springsale.jpg'
import img5 from './img/cover5.jpg'
import img6 from "./img/flower1.webp"
import img7 from "./img/about4.jpg"
import img8 from "./img/cover5.jpg"







 export default class Homepage extends React.Component
{
    render (){
     
        return(
            <div>
<br/> <br/> <br/>
           <div class="container">
<div class="card mb-3 w-540" >
  <div class="row no-gutters">
    
    <div class="col-md-6">
      <div class="card-body">
        <h2 class="card-title text-danger"> Flower</h2>
        <p class="card-text ">Valentine’s Day flowers are a very popular way to express one’s love and affection, which is why they play an important role in Valentine’s Day gifting. Red roses, orchids and myrtle flowers are some of the best gifts to give on Valentine’s Day because they represent love and romance. So, to stand out from the rest, why not accompany your flowers with a flower quote or pun? Flower quotes and puns are a fun and unique way to show your Valentine just how much you care, without breaking the bank.


To help you choose a phrase to impress your love this holiday we have compiled 50 of the best flower quotes and puns around. Choose a sincere flower quote to express deep feeling or send a funny flower pun to put a smile on that special someone’s face..</p>
        <p class="card-text"><small class="text-muted">flower shop</small></p>
      </div>
    </div>
    <div class="col-md-6">
      <img src={img} class="card-img img-thumbnail"  alt="..."/>
    </div>
  </div>
</div>

</div>

<br/> <br/>



<div class="container">
<div class="row">
  <div class="col-md-12">

    <div id="mdb-lightbox-ui"></div>

    
      <div class="row">
      <figure class="col-md-4">
        
          <img alt="picture" src={img2} 
            class="img-fluid " />
          <h3 class="text-center my-3 text-danger" >Made with Love</h3>
    
      </figure>

      <figure class="col-md-4">
       
          <img alt="picture" src={img4}
            class="img-fluid " />
          <h3 class="text-center my-3 text-success">our sale</h3>
        
      </figure>

      <figure class="col-md-4">
        
          <img alt="picture" src={img3}
            class="img-fluid " />
          <h3 class="text-center my-3 text-danger">Beautiful</h3>
        
      </figure>
</div>
<div class="row">
      <figure class="col-md-4">
       
          <img alt="picture " src={img5}
            class="img-fluid " />
          <h3 class="text-center my-3 text-danger">Gifts</h3>
     
      </figure>

      <figure class="col-md-4">
        
          <img alt="picture " src={img6} height="290px" width=" 350px"
            class="img " />
          <h3 class="text-center my-3 text-danger">Quality</h3>
        
      </figure>

      <figure class="col-md-4">
       
          <img alt="picture" src={img7} height="290px" width=" 370px"
            class="img " />
          <h3 class="text-center my-3 text-danger">Cooperation</h3>
      
      </figure>

    </div>

  </div>
</div>
</div>

   </div>
  
    
    );

}
}