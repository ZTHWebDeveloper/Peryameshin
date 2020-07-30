const User = require('../models/Register');
const Orgainzation = require('../models/Organization')
const Volunteer = require('../models/Volunteer')
const Withdraw = require('../models/Withdraw')
const Return = require('../models/ReturnAmount') 
const Post = require('../models/Post')
const jwt = require('jsonwebtoken')
const passgen = require('../helpers/passgen')

const register = (req,res) =>{
    let pass = req.body.password;
    let confrimpass =req.body.confrimpass;
    if(pass == confrimpass){
        passgen.encrypt(pass)
            .then(passencode=>{
                let user = new User({
                    name:req.body.name,
                    email:req.body.email,
                    password:passencode,
                    confrimpass:passencode
                })
                user.save()
                    .then(reuslt=>{
                        res.json({con:true,msg:reuslt})
                    })
                    .catch(err=>{
                        res.json({con:false,msg:err})
                    })
            })
            .catch(err=>{
                res.json({con:false,msg:err})
            })
    }else{
        res.json("error")
    }
    
}


const login = (req,res)=>{
    let emaildata = req.body.email;
    let pass = req.body.password;
    
    User.find({'email':emaildata})
        .then(user=>{
            passgen.compare(pass,user[0].password)
                .then(data=>{
                    if(data){
                        let payload = {
                            email:user[0].email,
                            name:user[0].name
                        }
                        let token = jwt.sign(payload,process.env.SCRET)
                        res.json({con:true,token:token,user_id:user[0]._id,name:user[0].name})
                    }else{
                        res.json({con:false})
                    }
                }).catch(err=>{
                    res.json(err)
                })
                    
        }).catch(err=>{
            res.json({con:false})
        })
 }

 const registerAll = (req,res)=>{
    User.find()
        .then(reuslt=>{
            res.json(reuslt)
        })
        .catch(err=>{
            res.json(err)
        })
}

//Start For Orgainzation

const OrganizationSave = (req,res)=>{
    let organization = new Orgainzation({
        name:req.body.name,
        date:req.body.date,
        sign:req.body.sign
    })
    organization.save()
        .then(reuslt=>{
            res.json({con:true,msg:reuslt})
        })
        .catch(err=>{
            res.json({con:false,msg:err})
        })
}

const OrganizationAll = (req,res)=>{
    Orgainzation.find()
        .then(reuslt=>{
            res.json({con:true,msg:reuslt})
        })
        .catch(err=>{
            console.log(err)
        })
}
// End for Orgainzation


//Start For Volunteer

const VolunteerSave = (req,res)=>{
    let volunteer = new Volunteer({
        name:req.body.name,
        date:req.body.date,
        amount:req.body.amount
    })
    volunteer.save()
        .then(reuslt=>{
            res.json({con:true,msg:reuslt})
        })
        .catch(err=>{
            res.json({con:false,msg:err})
        })
}

const VolunteerAll = (req,res)=>{
    Volunteer.find()
        .then(reuslt=>{
            res.json({con:true,msg:reuslt})
        })
        .catch(err=>{
            res.json({con:false,msg:err})
        })
}
// End for Volunteer


//Start For Withdraw

const WithdrawSave = (req,res)=>{
    let withdraw = new Withdraw({
        withdraw_name:req.body.withdraw_name,
        patient_name:req.body.patient_name,
        prove_name:req.body.prove_name,
        withdraw_date:req.body.withdraw_date,
        withdraw_amount:req.body.withdraw_amount,
        sign:req.body.sign
    })
    withdraw.save()
        .then(reuslt=>{
            res.json({con:true,msg:reuslt})
        })
        .catch(err=>{
            res.json({con:false,msg:err})
        })
        
}

const WithdrawAll = (req,res)=>{
    Withdraw.find()
        .then(reuslt=>{
           res.json({con:true,msg:reuslt})
        })
        .catch(err=>{
            res.json({con:false,msg:err})
        })
}

const WithdrawId = (req,res)=>{
    let parm = req.param("id")
    Withdraw.find({'_id':parm})
        .then(reuslt=>{
           res.json({con:true,msg:reuslt[0]})
        })
        .catch(err=>{
            res.json({con:false,msg:err})
        })
}
// End for Volunteer


//Start For Return Amout

const ReturnSave = (req,res)=>{
    let parm = req.param("id")
    const returnAmount = req.body.return_amount;
    Withdraw.find({'_id':parm})
        .then(data=>{
            Return.count({}, function( err, count){
                if(count == 0){
                    let retunAmount = new Return({
                        return_name:req.body.return_name,
                        return_date:req.body.return_date,
                        withdraw_amount:data[0].withdraw_amount,
                        return_amount:returnAmount,
                        remain_amount:data[0].withdraw_amount - returnAmount,
                        widthdraw_id:data[0]._id,
                        sign:req.body.sign
                    })
                    retunAmount.save()
                        .then(reuslt=>{
                            res.json(reuslt) 
                        })
                        .catch(err=>{
                            res.json(err)
                    })
                }else{
                    Return.findOne({'widthdraw_id':parm},(err,doc)=>{
                       if(doc.remain_amount < returnAmount || doc.remain_amount == 0 ){
                          console.log("Don't require to debag")  
                       }else{
                            doc.return_amount = returnAmount
                            doc.remain_amount = doc.remain_amount - returnAmount;
                            doc.save()
                                .then(data=>{
                                    res.json({con:true,msg:data})
                                }).catch(err=>{
                                    console.log({con:false,msg:err})
                                })
                       }
                       
                    })
                }
            })
               
        })
        .catch(err=>{
            res.json(err)
        })
}

const ReturnAll = (req,res)=>{
    let id = req.param("id")
    Return.find({'widthdraw_id':id})
        .then(reuslt=>{
           res.json({con:true,msg:reuslt[0]})
        })
        .catch(err=>{
            res.json({con:false,msg:err})
        })
}
// End for Return Amount


//Post Upload 

const PostSave = (req,res)=>{
    let post = new Post({
        title:req.body.title,
        description:req.body.description,
        image:req.file.filename,
        user_id:req.body.user_id
    })
    post.save()
        .then(reuslt=>{
            res.json(reuslt)
        })
        .catch(err=>{
            res.json(err)
        })
        
}

const PostAll = (req,res)=>{
    Post.find()
        .then(reuslt=>{
           res.json(reuslt)
        })
        .catch(err=>{
           res.json(err)
        })
}
const PostId = (req,res)=>{
    let id = req.param("id")
    Post.find({'user_id':id})
        .populate('user_id')
        .exec((err,data)=>{
            if(err){
                res.json("err")
            }else{
                res.json(data)
            }
        })
}
//End Post Upload

 module.exports = {
     register ,
     login,
     registerAll,
     OrganizationSave,
     OrganizationAll,
     VolunteerSave,
     VolunteerAll,
     WithdrawSave,
     WithdrawAll,
     WithdrawId,
     ReturnSave,
     ReturnAll,
     PostSave,
     PostAll,
     PostId
 };