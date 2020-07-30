import React, { Component } from 'react'
import NavbarLayout from '../../components/homeComponent/NavbarLayout';
import axios from 'axios'
import SliderImage from '../../components/homeComponent/sliderImage'
import Footer from '../../components/homeComponent/footer'

export class UploadVolunteer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            date:'',
            amount:''
        }
        this.onVolunteer = this.onVolunteer.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onVolunteer(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    onSubmit(e){
        e.preventDefault()
        const token = localStorage.getItem('token')
        console.log(this.state)
        axios.post('http://localhost:4000/admin/uploadVoluteer',this.state,{
            headers: {
                "Authorization" : `Bearer ${token}`
               } 
        }).then(response=>{
               if(response.data.con){
                this.props.history.push('/adminpost')
               }
            })
            .catch(err=>{
                console.log(err)
            })
    }
    render() {
        const form = {
            border:'2px solid #ddd',
            padding:'40px',
            boxShadow:'5px 5px 10px black',
            marginTop:'5%'
        }
        return (
            <div>
                <NavbarLayout />
                <SliderImage />
                <form className="col-md-6 offset-md-3"  style={form} onSubmit={this.onSubmit}>
                    <legend style={{textAlign:'center',paddingBottom:'3%'}}>Volunteer Personal</legend>
                    <div className="form-group">
                        <label for="formName">Name</label>
                        <input type="text" name="name" onChange={this.onVolunteer} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="formDate">Date</label>
                        <input type="date" name="date" onChange={this.onVolunteer} className="form-control"/>
                    </div> 
                    <div className="form-group">
                        <label for="formAmount">Amount</label>
                        <input type="number" name="amount" onChange={this.onVolunteer}  className="form-control"/>
                    </div>  
                    <div className="form-group">
                        <button type="submit" class="btn btn-outline-success">Add Volunteer</button>
                    </div>  
                </form>
                <Footer />
            </div>
        )
    }
}

export default UploadVolunteer
