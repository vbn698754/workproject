const express = require('express');
const router = express.Router();
const Announcement = require('../models/announcementModel');
const { ObjectId } = require('mongodb');

// 處理根據 ID 獲取單一公告的 GET 請求
router.get('/:id', async (req, res) => {
  try {
    const providedId = req.params.id;

    // 將提供的 ID 轉換為 ObjectId 物件
    const idObject = new ObjectId(providedId);

   // 檢查提供的 ID 是否是有效的 ObjectId
if (!ObjectId.isValid(providedId)) {
  return res.status(400).json({ 訊息: '無效的 ID 格式' });
}

    const announcement = await Announcement.findById(idObject);

    if (!announcement) {
      return res.status(404).json({ 訊息: '公告找不到' });
    }

    res.json(announcement);
  } catch (error) {
    console.error('處理請求時發生錯誤：', error);
    res.status(500).json({ 訊息: error.message });
  }
});

module.exports = router;