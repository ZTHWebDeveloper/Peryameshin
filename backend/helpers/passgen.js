const bcrybt = require('bcrypt')

const encrypt = (pass)=>{
    return new Promise((resolve,reject)=>{
        const salt = bcrybt.genSaltSync(10);
        bcrybt.hash(pass,salt,(err,data)=>{
       if(err)reject(err)
        resolve(data)
     })
    })
}

const compare = (plain,encode) =>{
   return new Promise((resolve,reject)=>{
    bcrybt.compare(plain, encode, function(err, result) {
        if(err)reject(err)
        resolve(result)
     })
   })
    
}
module.exports = {
    encrypt,
    compare
}