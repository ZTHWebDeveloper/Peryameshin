import React, { Component } from 'react'
import NavbarLayout from '../../components/homeComponent/NavbarLayout';
import axios from 'axios'
import SliderImage from '../../components/homeComponent/sliderImage'
import Footer from '../../components/homeComponent/footer'
export class UploadPatient extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            withdraw_name:'',
            patient_name:'',
            prove_name:'',
            withdraw_date:'',
            withdraw_amount:'',
            sign:''
        }
        this.onSubmit =this.onSubmit.bind(this)
        this.changleHandler = this.changleHandler.bind(this)
    }
    
    changleHandler(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        console.log(this.state)
        const token = localStorage.getItem('token')
        axios.post('http://localhost:4000/admin/uploadpatient',this.state,{
            headers: {
                "Authorization" : `Bearer ${token}`
               } 
        })
        .then(response=>{
            if(response.data.con){
                console.log(response.data.con)
                this.props.history.push('/adminpost')
            }else{
                this.props.history.push('/uploadOrgainzation')
            }

        }).catch(err=>{
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
                    <legend style={{textAlign:'center',paddingBottom:'3%'}}>Parteint Withdraw</legend>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Withdraw Name</label>
                        <input type="text" className="form-control" name="withdraw_name" onChange={this.changleHandler}/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Parteint Name</label>
                        <input type="text" className="form-control" name="patient_name" onChange={this.changleHandler}/>
                    </div> 
                    <div className="form-group">
                        <label for="formGroupExampleInput">Prove that</label>
                        <input type="text" className="form-control" name="prove_name" onChange={this.changleHandler}/>
                    </div>  
                    <div className="form-group">
                        <label for="formGroupExampleInput">Withdraw Date</label>
                        <input type="date" className="form-control" name="withdraw_date" onChange={this.changleHandler}/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Withdraw Amount</label>
                        <input type="number" className="form-control" name="withdraw_amount" onChange={this.changleHandler}/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Sign</label>
                        <input type="text" className="form-control"name="sign" onChange={this.changleHandler}/>
                    </div>
                    <div className="form-group">
                        <button class="btn btn-outline-success"> Withdraw Amount</button>
                    </div>  
                </form>
                <Footer />
            </div>
        )
    }
}

export default UploadPatient
