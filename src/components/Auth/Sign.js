import React, { Component } from 'react'
import {Textfield,Button} from 'react-mdl';
import axios from 'axios'
export class Sign extends Component {
    constructor(props) {
        super(props)
        this.state = {
             email:'',
             password:''
        }
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onHandleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    onSubmit(e){
        e.preventDefault()

        // let email = localStorage.getItem("email");
        // let pass = localStorage.getItem("password")

        // if(email == this.state.email && pass == this.state.password){
        //     this.props.history.push('/home')
        // }else{
        //     console.log("Erro")
        // }
        axios.post('http://localhost:4000/admin/login',this.state)
            .then(response=>{
                if(response.data.con){
                    localStorage.setItem('token',response.data.token)
                    localStorage.setItem('user_id',response.data.user_id)
                    localStorage.setItem('name',response.data.name)
                    this.props.history.push('/home')
                   
                }else{
                    console.log(response.data.con)
                    this.props.history.push('/')
                }
                
            }).catch(err=>{
                console.log(err)
            })
    }
    render() {
        // let loginFail 

        // if(localStorage.getItem('loginFail') != undefined){
        //     loginFail =  <p className="alert alert-danger">{localStorage.getItem('loginFail')}</p>
        // }else{
        //     loginFail =null
        // }
        const changeStyle = {
            marginTop:'10%',
            boxShadow:' 0px 1px 10px 1px #bbb',
            borderRadius:'10px'
        }
        return (
          
            <div className="col-md-4 offset-md-4" style={changeStyle}>
                <h3 style={{textAlign:'center',paddingTop:'5%',fontWeight:'bold'}}>Login</h3>
                {this.state.loginFial}
                <form onSubmit={this.onSubmit}>
                    <div className="modal-body">
                        <Textfield
                            name="email"
                            type="email"
                            onChange={this.onHandleChange}
                            label="Email"
                            floatingLabel
                            style={{width: '200px',color:'black'}}
                            />
                        <Textfield
                            name="password"
                            type="password"
                            onChange={this.onHandleChange}
                            label="Password"
                            floatingLabel
                            style={{width: '200px',color:'black'}}
                        />
                    </div>
                    <div className="modal-footer">
                        <Button raised accent style={{width:'100%',boxShadow:' 0px 1px 30px 1px #bbb'}}>Login</Button>
                    </div>
                    <p style={{padding:'3% 0 3% 25%'}}>Don't have an account? Please<a href="/register"> <b>Sign up</b></a></p>
                </form>
            </div>
        )
    }
}

export default Sign