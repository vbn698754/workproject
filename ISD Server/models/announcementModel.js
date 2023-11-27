const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
  files: [
    {
      filename: String,
      url: String,
    }
  ],
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;
