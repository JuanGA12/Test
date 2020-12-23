import {RequestHandler, response}  from 'express'
import {hashSync,compareSync} from 'bcrypt'
import User from '../models/User'

export const createUser: RequestHandler = async (req,res) =>{
    const UserFound = await User.findOne({user_name: req.body.user_name})
    if (UserFound){
        return res.status(301).json({message: 'The username already exists'})
    }
    try {
        req.body.password = hashSync(req.body.password, 10);
        const user = new User(req.body);
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({message: 'There was an error'});
    }
}
export const authUser: RequestHandler = async (req,res) =>{
    try {
        let user = await User.findOne({
            user_name: req.body.user_name
        }).exec();
        if(!user) {
            return res.status(400).json({ message: "The username does not exist" });
        }
        if(!compareSync(req.body.password, user.password)) {
            return res.status(400).json({ message: "The password is invalid" });
        }
        return res.json({ message: "The username and password combination are correct" , user:user});
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getUsers: RequestHandler = async (req,res) =>{
    try {
        const Users = await User.find()
        return res.json(Users)
    } catch (error) {
        return res.json(error)
    }
    
}

export const getUser: RequestHandler = async (req,res) =>{
    const UserFound = await User.findById(req.params.id)
    if (!UserFound) return response.status(204).json()
    else{
        return res.json(UserFound)
    }

}