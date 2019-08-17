const User = require('../data/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.listUsers = (req, res) => {
    User.find(function(err, users) {
        if(err) return next(err);
        res.json(users);
    });
};

exports.userDetails = (req, res) => {
    User.findById(req.params.paramsId, function(err, user) {
        if(err) res.status(500).json({ error: 'message' });
        // console.log(req);
        res.json(user);
    });
};

exports.updateUser= (req, res) => {
    User.findByIdAndUpdate(req.params.id,  {
        $set: req.body,
    }, function (err, user) {
        if(err) return next(err);
        res.send('User info updated');
    });
};

exports.questionCount = () => {
    let complexQuery = { $or: [ { 'answerTo3Questions.question1': 'Are you Male or Female' }, { 'answerTo3Questions.question2': 'Are you Male or Female' }, {'answerTo3Questions.question3': 'Are you Male or Female'}]}
    return new Promise((resolve, reject) => {
        User.countDocuments(complexQuery,(err, count)=>{
            if(err){
                reject(err);
            }else{
                console.log("The total number of accounts is: "+count);
                resolve(count);
            }
        })
    });
    
};
// db.collection.aggregate(
//     {$group : { _id : '$user', count : {$sum : 1}}}
//  ).result

exports.addUser = (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        userName: req.body.userName,
        birthDate: req.body.birthDate,
        nickName: req.body.nickName,
        age: req.body.age,
        password: 'hello',
        answerTo3Questions: {}
    });

    newUser.answerTo3Questions.question1 = req.body.answerTo3Questions[0];
    newUser.answerTo3Questions.question2 = req.body.answerTo3Questions[2];
    newUser.answerTo3Questions.question3 = req.body.answerTo3Questions[4];
    newUser.answerTo3Questions.answer1 = req.body.answerTo3Questions[1];
    newUser.answerTo3Questions.answer2 = req.body.answerTo3Questions[3];
    newUser.answerTo3Questions.answer3 = req.body.answerTo3Questions[5];
    bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
        console.log(hash);
        newUser.password = hash;
        newUser.save((err) => {
            if(err) {
                console.log(err);
                // return next(err);
            }
            res.send('New User Added Successfully');
        });
    });
    console.log(newUser);
}

// Get JavaScript object. Write Javascript to convert raw questions to labels