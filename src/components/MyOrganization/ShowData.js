import React, { Component } from 'react'
import NavbarLayout from '../../components/homeComponent/NavbarLayout';
import SliderImage from '../../components/homeComponent/sliderImage'
import Footer from '../../components/homeComponent/footer'
import axios from 'axios';

export class ShowData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             organizations:[],
        }
    }
    
    componentDidMount(){
        const token = localStorage.getItem('token')
        axios.get('http://localhost:4000/admin/showdata',{
             headers: {
                 "Authorization" : `Bearer ${token}`
                } 
            })
        .then(response=>{
            console.log(response)
           if(response.data.con){
            this.setState({organizations:response.data.msg})
           }else{
               console.log("erro")
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        const {organizations}  =this.state
        return (
            <div>
                <NavbarLayout />
                <SliderImage />
                <div style={{border:'2px solid #ddd',marginTop:'5%',height:'300px',overflow:'scroll'}}>
                    <h4 style={{textAlign:'center',margin:'3% 0%'}}>Organization Persons</h4>
                    <table className="table table-hover col-md-8 offset-md-2" style={{}}>
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Sign</th>
                            </tr>
                        </thead>
                        {
                            organizations.length ?
                            organizations.map(organization =>
                            <tbody>
                                <tr>
                                     <td></td>
                                    <td>{organization.name}</td>
                                    <td>{organization.date}</td>
                                    <td>{organization.sign}</td>
                                </tr>
                            </tbody>

                            )
                            :null
                        }
                    </table>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ShowData
