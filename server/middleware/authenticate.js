var {User} = require('./../models/users');


//MIDDLEWARE
var authenticate = (req,res,next) =>{
    var token = req.header('x-auth');

    User.findByToken(token).then((user)=>{
        if (!user){
            return Promise.reject(); // this promise rejects runs the exact way that the promise returning from users.js and runs line 142
        }
        req.user = user;
        req.token = token;
        next();
    }).catch((e)=>{
        res.status(401).send();
    });
};

module.exports = {authenticate};