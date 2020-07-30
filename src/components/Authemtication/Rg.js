import React, { Component } from 'react'
import axios from 'axios'
export class Rg extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            email: "",
            password: "",
            confrimpass: "",
        }
        this.onRegister = this.onRegister.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onRegister(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
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
            <div style={{marginTop:'5%'}}>
                <form className="col-md-6 offset-md-3" onSubmit={this.onSubmit}>
                    <legend style={{textAlign:'center',paddingBottom:'3%'}}>Volunteer Personal</legend>
                    <div className="form-group">
                        <label for="formName">Name</label>
                        <input type="text" name="name" onChange={this.onRegister} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="formDate">Email</label>
                        <input type="email" name="email" onChange={this.onRegister} className="form-control"/>
                    </div> 
                    <div className="form-group">
                        <label for="formAmount">Password</label>
                        <input type="password" name="password" onChange={this.onRegister}  className="form-control"/>
                    </div>  
                    <div className="form-group">
                        <label for="formAmount">confrimpass</label>
                        <input type="password" name="confrimpass" onChange={this.onRegister}  className="form-control"/>
                    </div>  
                    <div className="form-group">
                        <button type="submit" class="btn btn-outline-success">Add Volunteer</button>
                    </div>  
                </form>
            </div>
        )
    }
}

export default Rg
