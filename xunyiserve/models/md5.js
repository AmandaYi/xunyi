// md5 换算 密码
const crypto = require("crypto");

// 密码函数
function passwordToMD5(password) {
    // 创建一个md5
    let md5 = crypto.createHash("md5");
    // 加密
    let resultPassword = md5.update(password).digest("base64");
    return resultPassword;
}

// 导出
module.exports = passwordToMD5;