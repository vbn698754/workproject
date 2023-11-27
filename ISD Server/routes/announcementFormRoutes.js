// routes/announcementFormRoutes.js
const express = require('express');
const router = express.Router();
const Announcement = require('../models/announcementModel');
const multer = require('multer');

// 設定 multer 中間件，用於處理文件上傳
const upload = multer({
  dest: 'uploads/',
  fileFilter: (req, file, callback) => {
    const allowedMimeTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // Word 文檔
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Excel 表格
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Invalid file type. Allowed file types are: JPEG, PNG, PDF, Text.'));
    }
  }
});

// 處理上傳公告的 POST 請求
router.post('/', upload.array('files'), async (req, res) => {
  try {
    // 從 req.body 中獲取上傳的資訊
    const { title, author, content } = req.body;

    // 創建新的公告
    const newAnnouncement = new Announcement({
      title,
      author,
      content,
      timestamp: new Date(),
    });

    // 保存到資料庫
    const savedAnnouncement = await newAnnouncement.save();

    res.json({ message: '公告上傳成功' });
  } catch (error) {
    console.error('Error uploading announcement:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
