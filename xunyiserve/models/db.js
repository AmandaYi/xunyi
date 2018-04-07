const mongoose = require('mongoose');
const setting =  require('../config/dbsetting');
mongoose.connect(setting.dburl);

const db = mongoose.connection;
db.once('open', function (callback) {
    console.log("数据库成功打开");
});

module.exports = db;

 