import React from 'react';
import ReactDOM from 'react-dom';
import './slider.css'
import photo from  './img/welcome.jpg'
import photo2 from  './img/cover1.jpg'
import photo3 from  './img/cover3.jpg'




export default class Slider extends React.Component
{
    render (){
     
        return(
            <div>


<br/> <br/> <br/> 
<div id="demo" class="carousel slide" data-ride="carousel" >

 
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  id="img"src={photo} alt="Los Angeles" />
    </div>
    <div class="carousel-item">
      <img  id="img" src={photo3} alt="New York" />

    </div>
    <div class="carousel-item">
      <img id="img" src={photo2}alt="Chicago" />

    </div>
  </div>
  
 
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
            </div>
            
        );

    }
}