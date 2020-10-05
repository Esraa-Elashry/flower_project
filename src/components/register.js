import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            mail: '',
            pwd: '',
            phone:'',
            massage: ''
         }
    }
 
    change = (e) => {
        let name = e.target.name ,    
            val = e.target.value ,
            error = '' 
        console.log(val)
        if(name==='username' && val ){
            error = (val.length>=5 && val.length<=15)?
                        '' : 'username must be between 5 and 15 chars'
        }
        if(name==='mail' && val ){
            
        }
        if(name==='pwd' && val ){
            error = (val.length > 6) ? '' : 'too short passwd'
        }
        if(name==='phone' && val){
            error = !Number(val) ? 'phone must be numbers' : error
            error = val.length > 13 ? 'too long number' : error
        }

        this.setState({
            [name]: val  ,  
            massage: error ? <div className='alert alert-danger'>{error}</div> : ''    
        })
    }
    submit = (e) => {
        e.preventDefault()
        let error = ''
        // error = (this.state.phone) ? error : 'enter your phone'
        error = (this.state.mail) ? error : 'enter your mail'
        error = (this.state.username) ? error : 'enter your username'

        let mailPattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!mailPattern.test(this.state.mail)){
            error = 'Please provide a valid email addressw'
        }
        
        if( error ){
            this.setState({
                massage: error ? <div className='alert alert-danger'>{error}</div> : '' 
            })
        }else{
            localStorage.setItem('username', this.state.username)
            localStorage.setItem('mail', this.state.mail)
            localStorage.setItem('phone', this.state.phone)
            localStorage.setItem('currentOrder','[]')

            this.setState({})
            this.props.update()
             
        }
    }  

    render() { 
            return ( 
                <div>
                    <br/> <br/>
                    <br/> <br/>
                <div class="row justify-content-center">
                    
                    <form class='col-md-4 text-center py-5 shadow rounded registerform' onSubmit={this.submit}>
                   

                        <h3 class="mb-5 text-danger">register</h3>
                        {this.state.massage}
                        <div class="form-group">
                            <label for="exampleInputEmail1 " class="text-light h4">username</label>
                            <input type="text" class="form-control" name="username" placeholder="username" onChange={this.change} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="text-light h4">mail</label>
                            <input type='mail' class="form-control" name="mail" aria-describedby="emailHelp" placeholder="someone@ex.com" onChange={this.change}/>
                        </div>
                        <div class=" form-group"> 
                        <label for="pwd" for="exampleInputEmail1" class="text-light h4">Password</label>
                        <input type="password" id="pwd" name="pwd"   class="form-control" onChange={this.change}></input>

                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="text-light h4">phone</label>
                            <input type='phone' class="form-control" name="phone" aria-describedby="emailHelp" defaultValue='+2' onChange={this.change}  />
                        </div>
                        <button type='submit' class='btn btn-outline-danger btn-block'>Regiser</button>
                    </form>
                </div>
                </div>
             );
        
    }
}
 
export default Register;