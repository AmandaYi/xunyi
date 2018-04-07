const User = require("../models/User.js");


// 注册用户

exports.resigter = (req, res, next) => {

    const userInfo = req.body;
 
    User.findOne({ username: userInfo.username }, (err, user) => {
        console.log(req.body);
        if (err) {
            console.log("数据库异常");
            return;
        }
        if (user) {
            res.json({
                state: 0,
                data: {
                    stateText: '用户已存在!'
                }
            })
        } else {
            let user = new User(userInfo);
            user.save((err)=>{
                if(err){
                    console.log(`${userInfo.username}注册失败`);
                    return;
                }
                res.json({
                    state: 1,
                    data: {
                      stateText: '注册成功！'
                    }
                  })
                console.log(`${userInfo.username}注册成功`);
            })
        }
    })
}


