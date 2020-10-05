import React, { Component } from 'react';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <div>
               <br/> <br/> <br/> <br/>
               <div class='container ' >
            <p class="h3 text-danger ">Contact stuff here</p>
            <form class="form-group " action="/action_page.php"/>
                <div class="form-group"/>
                    <label for="name">Name : </label>
                    <input type="name" class="form-control" id="name"/>
                    <label for="email">Email address : </label>
                    <input type="email" class="form-control" id="email"/>
                
                    <div class="form-group">
    <label for="exampleFormControlTextarea1">YOUR Message :</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
                <button  type="submit" class="btn btn-danger">Submit</button>
                </div>
            </div>
         );
    }
}
 
export default ContactUs;