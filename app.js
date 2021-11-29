const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

const connect = () => {
    return mongoose.connect("mongodb+srv://kapoorkartik:2jhAiBXJCU26Lg4@cluster0.lkd0p.mongodb.net/job_portal?retryWrites=true&w=majority")
}

const companySchema = new mongoose.Schema(
    {
    company_name : {type : String , require : true },
    establish : {type : Number , require : true},
    head_ofiice : {type : String , require : true },
    },{
    versionKey : false,
    timestamps : true 
    }
)

const Company = mongoose.model("company",companySchema)

const jobSchema = new mongoose.Schema(
    {
    },{
    versionKey : false,
    timestamps : true 
    }
    
)

app.listen(2000,  async()=>{
    await connect()
    console.log('listening to port 2000')
   })
