// app.js
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db'); // 引入連線資料庫的模組
const announcementListRoutes = require('./routes/announcementListRoutes'); // 引入 announcementList 路由
const announcementFormRoutes = require('./routes/AnnouncementFormRoutes'); // 引入 announcementForm 路由
const announcementDetailRoutes = require('./routes/AnnouncementDetailRoutes'); // 引入 announcementDetail 路由
const cors = require('cors'); // 引入 cors 中間件

const app = express();
const port = 3000;

// 連接到 MongoDB 數據庫
connectDB();

// 設定中間件解析 JSON 請求
app.use(express.json());

// 跨域
app.use(cors());

// 使用 announcementList、announcementForm、announcementDetail 路由
app.use('/announcement/list', announcementListRoutes);
app.use('/announcement/form', announcementFormRoutes);
app.use('/announcement/detail', announcementDetailRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
