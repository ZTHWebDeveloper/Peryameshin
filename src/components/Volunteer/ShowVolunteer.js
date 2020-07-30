import React, { Component } from 'react'
import NavbarLayout from '../../components/homeComponent/NavbarLayout';
import SliderImage from '../../components/homeComponent/sliderImage'
import Footer from '../../components/homeComponent/footer'
import axios from 'axios';

export class ShowVolunteer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             volunteers :[]
        }
    }
    componentDidMount(){
        const token = localStorage.getItem('token')
        axios.get('http://localhost:4000/admin/showvolunteer',{
             headers: {
                 "Authorization" : `Bearer ${token}`
                } 
            })
            .then(respon=>{
                if(respon.data.con){
                    this.setState({volunteers:respon.data.msg})
                }else{
                    console(respon.data.con)
                }
            })
            .catch(err=>{
                console.log(err)
            })
    }
    
    render() {
        const {volunteers} = this.state
        return (
            <div>
                <NavbarLayout />
                <SliderImage />
                <div style={{border:'2px solid #ddd',marginTop:'5%',height:'300px',overflow:'scroll'}}>
                    
                    <h4 style={{textAlign:'center',margin:'3% 0%'}}>Organization Volunteer</h4>
                    <table className="table table-hover col-md-8 offset-md-2" style={{}}>
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        {
                            volunteers.length ?
                            volunteers.map(volunteer =>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>{volunteer.name}</td>
                                        <td>{volunteer.date}</td>
                                        <td>{volunteer.amount}</td>
                                    </tr>
                                </tbody>

                                )
                                :null

                        }
                    </table>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ShowVolunteer
