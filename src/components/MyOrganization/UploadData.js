import React, { Component } from 'react'
import NavbarLayout from '../../components/homeComponent/NavbarLayout';
import axios from 'axios'
import SliderImage from '../../components/homeComponent/sliderImage'
import Footer from '../../components/homeComponent/footer'
export default class UploadData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:localStorage.getItem('name'),
             date:'',
             sign :'',
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
    }
     
    handleChange(e){
       this.setState({[e.target.name]:e.target.value})
    }


    onSubmit(e){
        e.preventDefault()
        const token = localStorage.getItem('token')
        axios.post('http://localhost:4000/admin/uploadOrgainzation',this.state,{
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
                
                {/* Organization Start */}
                <form className="col-md-6 offset-md-3"  style={form} onSubmit={this.onSubmit}>
                    <legend style={{textAlign:'center',paddingBottom:'3%'}}>Organization Personal</legend>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Name</label>
                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} readOnly/>
                    </div>
                    
                    <div className="form-group">
                        <label for="formGroupExampleInput">Date</label>
                        <input type="date" className="form-control" name="date" onChange={this.handleChange} />
                    </div> 
                    <div className="form-group">
                        <label for="formGroupExampleInput">Sign Name</label>
                        <input type="text" className="form-control" name="sign" onChange={this.handleChange}/>
                    </div> 
                    <div className="form-group">
                        <button type="submit" class="btn btn-outline-success">Add Organization</button>
                    </div>  
                </form>
                {/* Organization End */}
                <Footer />
            </div>
        )
    }
}

