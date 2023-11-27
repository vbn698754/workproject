// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/frankhsu', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB 數據庫連接成功');
  } catch (error) {
    console.error('MongoDB 連接失敗:', error.message);
    process.exit(1); // 無法連接則退出應用
  }
};

module.exports = connectDB;
