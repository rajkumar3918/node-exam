const { genSalt, compare, hash } = require("bcrypt");
const Users = require("../modal/userSchema");

const registerUser = async ({body})=>{
    try {
        const {email, phone, username, password}=body;
        const checkEmail = await Users.find({email});
        
        if(checkEmail.length){
            throw new Error("Email already taken");
        } 
        const checkPhone = await Users.find({phone});
        if(checkPhone.length){
            throw new Error("phone already taken");
        }
        const checkUsername = await Users.find({username});
        if(checkUsername.length){
            throw new Error("username already taken");
        }
        const salt = await genSalt();
        const hassedpass = await hash(password, salt);
        const date = new Date();
        const data = await Users.create({
            ...body,
            password: hassedpass,
            createdAt: date,
            updatedAt: date,
        })
        return data;
    } catch (error) {
        return error.message
    }
};

const getUsers = async ({body}) =>{
    try{
        const user = await Users.find({});
        return user;
    }catch(error){
        return error.message;

    }
};

const login = async({body}) => {
    try {
        const {email, password} = body;
        const user = await Users.find({email});
        if(!user.length){
            throw new Error("User not fount");
        }
        const checkPass = await compare(password, user[0].password);
        if(!checkPass){
            throw new Error("worn creds")
        }
        const userData = JSON.stringify({
            userId: user[0]._id,
            email: user[0].email,
        });
        const token = CryptoJS.AES.encrypt(
            userData,
            process.enc.CRYPTO_SECRECT
        ).toString();
        return{
            token,
            userId: user[0]._id,
            email: user[0].email,

        }
    } catch (error) {
        return error.message;
    }
};
const updateUser = async ({body,userId}) =>{
    try{
        const user = await Users.findByIdAndUpdate(userId,{
            ...body,
            subscriptionPlan: ""
        })
        return user;
    }catch(error){
        return error.message;

    }
};

module.exports = {registerUser, getUsers, login, updateUser};