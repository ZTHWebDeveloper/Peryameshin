import React, { Component } from 'react'
import axios from 'axios'
export class ReturnShow extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             return_show :''
        }
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        const return_id = this.props.match.params.id
        axios.get(`http://localhost:4000/admin/returnshow/${return_id}`,{
             headers: {
                 "Authorization" : `Bearer ${token}`
                } 
            })
        .then(response=>{
            console.log(response)
           if(response.data.con){
            this.setState({return_show:response.data.msg},()=>{
                console.log(this.state)
            })
           }else{
               console.log("erro")
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    
    render() {
        const {return_show} = this.state
        return (
            <div style={{border:'2px solid #ddd',marginTop:'5%',height:'300px',overflow:'scroll'}}>
                <h4 style={{textAlign:'center',margin:'3% 0%'}}>Return Accounting</h4>
                <table className="table table-hover col-md-8 offset-md-2" style={{}}>
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Return Name</th>
                        <th scope="col">Return Date</th>
                        <th scope="col">withdraw_amount</th>
                        <th scope="col">Return Amount</th>
                        <th scope="col">Remain Amount</th>  
                        <th scope="col">Sign</th> 
                        </tr>
                    </thead>
                    {
                        return_show.length == undefined ?
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>{this.state.return_show.return_name}</td>
                            <td>{this.state.return_show.return_date}</td>
                            <td>{this.state.return_show.withdraw_amount}</td>
                            <td>{this.state.return_show.return_amount}</td>
                            <td>{this.state.return_show.remain_amount}</td>
                            <td>{this.state.return_show.sign}</td>
                            </tr>
                        </tbody>
                        :<div><h1> null</h1></div>
                    }
                </table>
            </div>
        )
    }
}

export default ReturnShow
