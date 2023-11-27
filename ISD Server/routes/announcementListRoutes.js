// routes/announcementListRoutes.js
const express = require('express');
const router = express.Router();
const Announcement = require('../models/announcementModel');

// 處理 GET 請求，獲取所有公告
router.get('/', async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ timestamp: -1 });
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;