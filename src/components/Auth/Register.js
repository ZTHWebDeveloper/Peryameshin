import React, { Component } from 'react'
import {Textfield,Button} from 'react-mdl';
import axios from 'axios'
export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            email:"",
            password:"",
            confrimpass:""

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
            console.log(this.state)
            // if(this.state){
            //     if(this.state.password == this.state.confrimpass){
            //         localStorage.setItem('email',this.state.email)
            //         localStorage.setItem('password',this.state.password)
            //         this.props.history.push('/')
            //     }else{
            //         console.log("Not Equal")
            //     }
            // }
            
            axios.post('http://localhost:4000/admin/register',this.state)
            .then(response =>{
                console.log(response)
                if(response.data.con){
                    this.props.history.push('/')
                }else{
                    this.props.history.push('/register')
                }
                
            })
            .catch(err=>{
                console.log(err)
            })
            
    }
    
    render() {
        const changeStyle = {
            marginTop:'10%',
            boxShadow:' 0px 1px 10px 1px #bbb',
            borderRadius:'10px'
        }
        return (
            <div className="col-md-4 offset-md-4" style={changeStyle}>
                <h3 style={{textAlign:'center',paddingTop:'5%',fontWeight:'bold'}}>Register</h3>
                <form onSubmit={this.onSubmit}>
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
                    <div>
                        <Button raised accent style={{width:'100%',boxShadow:' 0px 1px 30px 1px #bbb'}}>Register</Button>
                    </div>
                    <p style={{padding:'3% 0 3% 25%'}}>If there is account ,please&nbsp; <a href="/"> <b>Login</b></a></p>
                </form>
            </div>
        )
    }
}

export default Register

