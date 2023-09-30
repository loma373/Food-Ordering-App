const userData= require('../models/User')


const addUser= async(req,res)=>{
    try {
        const userAddition= await userData.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location
        })
        res.sendStatus(200).json({success: true})
    } catch (error) {
        console.log("error at user creation ", error)
    }
}

module.exports={
    addUser
}