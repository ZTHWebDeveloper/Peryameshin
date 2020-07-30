import React, { Component } from 'react'
import {Textfield} from 'react-mdl';
import axios from 'axios'
export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             email: "",
             password: "",
             confrimpass: "",
        }
        this.onHandleChange = this.onHandleChange.bind(this)
        // this.onChangeEmail = this.onChangeEmail.bind(this)
        // this.onChangePassword = this.onChangePassword.bind(this)
        // this.onChangeConfrimPasswrod = this.onChangeConfrimPasswrod.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onHandleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    // onChangeUsername(e){
    //     this.setState({
    //         name:e.target.value
    //     })
    // }
    
    // onChangeEmail(e){
    //     this.setState({
    //         email:e.target.value
    //     })
    // }
    // onChangePassword(e){
    //     this.setState({
    //         password:e.target.value
    //     })
    // }
    // onChangeConfrimPasswrod(e){
    //     this.setState({
    //         confrimpass:e.target.value
    //     })
    // }

    onSubmit(e){
       e.preventDefault()
    //    const register ={
    //        name : this.state.name,
    //        email : this.state.email,
    //        password : this.state.password,
    //        confrimpass : this.state.confrimpass
    //    }
        console.log(this.state)
        
       axios.post('http://localhost:4000/admin/register',this.state)
            .then(response=>{
               this.props.history.push('/adminpost')
            })
            .catch(err=>{
                console.log(err)
            })
    
    }
    render() {
        return (
            <div className="modal fade" id="register">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle" style={{color:'black'}}>Register Form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="modal-body">
                                <Textfield
                                    name="name"
                                    type="text"
                                    onChange={this.onHandleChange}
                                    label="Name"
                                    style={{width: '200px',color:'black'}}
                                    />
                                <Textfield
                                    name="email"
                                    type="email"
                                    onChange={this.onHandleChange}
                                    label="Email"
                                    floatingLabel
                                    style={{width: '200px',color:'black'}}
                                />
                            
                                <Textfield
                                    type="password"
                                    name="password"
                                    onChange={this.onHandleChange}
                                    pattern="-?[0-9]*(\.[0-9]+)?"
                                    error="Input is not a number!"
                                    label="Password"
                                    style={{color:'black'}}
                                />
                                <Textfield
                                    type="password"
                                    name="confrimpass"
                                    onChange={this.onHandleChange}
                                    pattern="-?[0-9]*(\.[0-9]+)?"
                                    error="Input is not a number!"
                                    label="Comfirmpassword"
                                    style={{color:'black'}}
                                /> 
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                                <button className="btn btn-outline-success">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Register