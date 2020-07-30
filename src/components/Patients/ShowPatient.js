import React, { Component } from 'react'
import NavbarLayout from '../../components/homeComponent/NavbarLayout';
import SliderImage from '../../components/homeComponent/sliderImage'
import Footer from '../../components/homeComponent/footer'
import axios from 'axios';
import {Link} from 'react-router-dom'
import ReturnShow from '../ReturnAmount/ReturnShow'
export class ShowPatient extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             patients : []
        }
    }
    
    componentDidMount(){
        const token = localStorage.getItem('token')
        axios.get('http://localhost:4000/admin/showpatient',{
             headers: {
                 "Authorization" : `Bearer ${token}`
                } 
            })
        .then(response=>{
            console.log(response)
           if(response.data.con){
            this.setState({patients:response.data.msg})
           }else{
               console.log("erro")
           }
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        const {patients} = this.state
        return (
            <div>
                <NavbarLayout />
                <SliderImage />
                <div style={{border:'2px solid #ddd',marginTop:'5%',height:'300px',overflow:'scroll'}}>
                    <h4 style={{textAlign:'center',margin:'3% 0%'}}>Withdraw Accounting</h4>
                    <table className="table table-hover col-md-8 offset-md-2" style={{}}>
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Withdraw Name</th>
                            <th scope="col">Parteint Name</th>
                            <th scope="col">Prove that</th>
                            <th scope="col">Withdraw Date</th>
                            <th scope="col">Withdraw Amount</th>
                            <th scope="col">Sign</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            patients.length ?
                            patients.map(patient =>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>{patient.withdraw_name}</td>
                                    <td>{patient.patient_name}</td>
                                    <td>{patient.prove_name}</td>
                                    <td>{patient.withdraw_date}</td>
                                    <td>{patient.withdraw_amount}</td>
                                    <td>{patient.sign}</td>
                                    <td style={{display:'block'}}>
                                        <Link to={`/uploadreturn/${patient._id}`}><button className="btn btn-success">Return</button></Link>
                                        <Link to={`/returnshow/${patient._id}`}><button className="btn btn-danger">Detail</button></Link>
                                    </td>
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

export default ShowPatient
