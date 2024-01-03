import User from "../models/user.js";
import bcrypt from 'bcrypt'


export const register = async (req, res) =>{
    try {
        //option one for posting this option will not take any changes


        // const newUser = new User(req.body)
    
        // const savedUser = await newUser.save() 


        // ontion 2 this will take changes whatever u want 
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body

        const hashedPassword = await bcrypt.hash(req.body.password, 10) 

        const newUser = await User({
            firstName,
            lastName,
            email,
            password: hashedPassword

        })

        const savedUser = await newUser.save()
        res.status(200).json({
            message:"ok",
            data:savedUser
        })

        
    } catch (err) {
        res.status(500).json({error: err.message})
    }
} 