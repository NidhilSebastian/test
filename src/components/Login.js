import React, { Component } from 'react'

class Login extends Component {
    state = {
        username: '',
        password: '',
        errorMessage: null
    }
    onChangeEvent = (e) =>{
        this.setState({[e.target.name] : e.target.value});
    }
    onLogin = async (e) =>{
        e.preventDefault();
        if(this.state.username.trim().length === 0 ){
            this.setState({errorMessage: 'User name cannot be empty.'});
        }
        if(this.state.password.trim().length === 0 ){
            this.setState({errorMessage: 'Password cannot be empty.'});
        }

        const isLoginSucceeded = await this.props.loginUser(this.state.username, this.state.password);
        if(!isLoginSucceeded){
            this.setState({errorMessage: "Invalid username or password"});
            return;
        }
        else{
            this.setState({errorMessage: null});
        }
    }
    render() {
        return (
            <div  className="container ">                
                <div style={{height: "150px"}} >
                </div>             
                <div className="d-flex justify-content-center h-200">
                    <div className="card">  
                    <div className="card-footer">                           
                        </div>                 
                        <div className="card-body">
                            <form onSubmit ={this.onLogin}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" 
                                        value={this.state.username} 
                                        onChange ={this.onChangeEvent}
                                        name="username"
                                        className="form-control" 
                                        placeholder="username">                                    
                                    </input>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input 
                                        type="password" 
                                        name="password"
                                        onChange ={this.onChangeEvent}
                                        value={this.state.password}  
                                        className="form-control" 
                                        placeholder="password">                                    
                                    </input>
                                </div>                               
                                <div className="row justify-content-md-center">
                                    <input type="submit"  value="Login" className="btn float-right login_btn"></input>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer"> 
                        {this.state.errorMessage? <div class="alert alert-danger" role="alert">{this.state.errorMessage}</div> : null}                          
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login
