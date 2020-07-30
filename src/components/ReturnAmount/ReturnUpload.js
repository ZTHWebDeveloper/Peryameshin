import React, { Component } from 'react'
import axios from 'axios'
export class ReturnUpload extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           patient_return_amount:'',
           return_amount:'',
           return_date:''
           
        }
        this.ChangeHandler = this.ChangeHandler.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    ChangeHandler(e){
        this.setState({[e.target.name]:e.target.value})
    }
    componentDidMount(){
        const token = localStorage.getItem('token')
        const patient_id = this.props.match.params.id
        axios.get(`http://localhost:4000/admin/uploadreturn/${patient_id}`,{
             headers: {
                 "Authorization" : `Bearer ${token}`
                } 
            })
        .then(response=>{
            console.log(response)
           if(response.data.con){
            this.setState({patient_return_amount:response.data.msg},()=>{
                console.log(this.state)
            })
           }else{
               console.log("erro")
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    onSubmit(e){
        
        e.preventDefault()
        const token = localStorage.getItem('token')
        console.log(this.state)
        const patient_id = this.props.match.params.id
        axios.post(`http://localhost:4000/admin/uploadreturn/${patient_id}`,this.state,{
             headers: {
                 "Authorization" : `Bearer ${token}`
                } 
            })
        .then(response=>{
            console.log(response)
           if(response.data.con){
                console.log(response)
           }else{
               console.log("erro")
           }
        }).catch(err=>{
            console.log(err)
        })
        
        
    }
    render() {
         
        const form = {
            border:'2px solid #ddd',
            padding:'40px',
            boxShadow:'5px 5px 10px black'
        }
        return (
            <div style={{marginTop:'5%'}}>
                <form className="col-md-6 offset-md-3" onSubmit={this.onSubmit}  style={form}>
                    <legend style={{textAlign:'center',paddingBottom:'3%'}}>Return Amount</legend>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Return Name</label>
                        <input type="text" className="form-control" value={this.state.patient_return_amount.withdraw_name} name="return_name" onChange={this.ChangeHandler} />
                    </div>  
                    <div className="form-group">
                        <label for="formGroupExampleInput">Return Date</label>
                        <input type="date" className="form-control" name="return_date" onChange={this.ChangeHandler}/>
                    </div> 
                    
                    <div className="form-group">
                        <label for="formGroupExampleInput">Rerurn Amount</label>
                        <input type="number" className="form-control" name="return_amount" onChange={this.ChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Sign</label>
                        <input type="text" className="form-control" value={this.state.patient_return_amount.sign}  name="sign" onChange={this.ChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <button class="btn btn-outline-success"> Return Amount</button>
                    </div>  
                </form>
            </div>
        )
    }
}

export default ReturnUpload
