import React, { Component } from 'react'
import {Textfield} from 'react-mdl';
import {useHistory} from 'react-router-dom'

import axios from 'axios';
export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email : '',
             password : '',
             loggedIn:false,
             token:''
        }
       // this.onHandleChange = this.onHandleChange.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
       
    }
    
    // onHandleChange(e){
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }
    onChangeEmail(e){
        this.setState({
            email : e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        // const login = {
        //     email : this.state.email,
        //     password : this.state.password
        // }
        // axios.post('http://localhost:4000/admin/login',this.state)
        //     .then(response=>{
        //         console.log(response)
        //         history.push('/about')
        //     }).catch(err=>{
        //         console.log(err)
        //     })
    }

    render() {

        return (
            <div>
                <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle" style={{color:'black'}}>Login Form</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body">
                                    <Textfield
                                        name="email"
                                        onChange={this.onChangeEmail}
                                        label="Email"
                                        floatingLabel
                                        style={{width: '200px',color:'black'}}
                                    />
                                
                                    <Textfield
                                        name="password"
                                        onChange={this.onChangePassword}
                                        pattern="-?[0-9]*(\.[0-9]+)?"
                                        error="Input is not a number!"
                                        label="Password"
                                        floatingLabel
                                        style={{color:'black'}}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                                    <button className="btn btn-outline-success">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
