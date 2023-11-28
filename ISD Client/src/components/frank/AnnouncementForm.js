// AnnouncementForm.js
import React, { useState } from 'react';
import axios from 'axios';
import QuillEditor from './QuillEditor'; // 根據你的文件結構調整路徑
import FormStyle from '../../css/frank/AnnouncementForm.module.css';

const AnnouncementForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditorChange = (content) => {
    setFormData({
      ...formData,
      content: content,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title: formData.title,
      author: formData.author,
      content: formData.content,
    };

    try {
      const response = await axios.post('http://localhost:3000/announcement/form', postData);
      console.log('Announcement uploaded:', response.data);
      setFormData({
        title: '',
        author: '',
        content: '',
      });
    } catch (error) {
      console.error('Error uploading announcement:', error);
    }
  };

  return (
    <form className={FormStyle.form} onSubmit={handleSubmit}>
      <div className={FormStyle.formGroup}>
        <label className={FormStyle.label}>標題：</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className={FormStyle.input}
          required
        />
      </div>

      <div className={FormStyle.formGroup}>
        <label className={FormStyle.label}>作者：</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          className={FormStyle.input}
          required
        />
      </div>

      <div className={`${FormStyle.formGroup} ${FormStyle.quillEditorContainer}`}>
        <label className={FormStyle.label}>內容：</label>
        <QuillEditor className={FormStyle.content} value={formData.content} onChange={handleEditorChange}  />
      </div>
    
      <div className={FormStyle.formGroupBtn}>
        <button type="submit" className={FormStyle.button}>
          上傳
        </button>
      </div>
    </form>
  );
};

export default AnnouncementForm;
