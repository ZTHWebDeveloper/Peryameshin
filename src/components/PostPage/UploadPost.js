import React, { Component } from 'react'

import NavbarLayout from '../../components/homeComponent/NavbarLayout';
import SliderImage from '../../components/homeComponent/sliderImage'
import Footer from '../../components/homeComponent/footer'
import axios from 'axios';

export class UploadPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            description:'',
            file: null,
            user_id:localStorage.getItem("user_id")
        }
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onTilteChange = this.onTilteChange.bind(this)
        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onHandleChange(e){
        this.setState({
            user_id:e.target.value
        })
    }

    onChange(e){
        this.setState({file:e.target.files[0]})
    }

    onTilteChange(e){
        this.setState({
            title:e.target.value
        })
    }
    onDescriptionChange(e){
        this.setState({
            description:e.target.value
        })
    }
    

    onSubmit(e){
        e.preventDefault()
        console.log(this.state.user_id)
        const formData = new FormData();
        formData.append('image',this.state.file);
        formData.append('title',this.state.title);
        formData.append('description',this.state.description);
        formData.append('user_id',this.state.user_id)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        axios.post('http://localhost:4000/admin/uploadpost',formData,config)
        .then(response=>{
          console.log(this.state.value)
            console.log(response)
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
                    <legend style={{textAlign:'center',paddingBottom:'3%'}}>Post Upload</legend>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Title</label>
                        <input type="text" className="form-control" name="title" onChange={this.onTilteChange}/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Description</label>
                        <textarea className="form-control" name="description" onChange={this.onDescriptionChange}></textarea>
                    </div> 
                    <div className="form-group">
                        <label for="formGroupExampleInput">Picture Select</label>
                        <input type="file" className="form-control" name="image" onChange={this.onChange}/>
                    </div> 
                    <div className="form-group">
                        <input type="hidden" className="form-control" value={this.state.user_id} name="user_id" onChange={this.onHandleChange}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" class="btn btn-outline-success"> Post Upload</button>
                    </div>  
                </form>
                <Footer />
            </div>
        )
    }
}

export default UploadPost
