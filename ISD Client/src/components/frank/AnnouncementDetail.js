import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Detail from '../../css/frank/AnnouncementDetail.module.css'

const AnnouncementDetail = ({ match }) => {
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    const fetchAnnouncementDetails = async () => {
      try {
        // 使用公告的 ID 向後端發送請求
        const response = await axios.get(`http://localhost:3000/announcement/detail/${match.params.id.toString()}`);
        setAnnouncement(response.data);
      } catch (error) {
        console.error('Error fetching announcement details:', error);
      }
    };

    fetchAnnouncementDetails();
  }, [match.params.id]);

  if (!announcement) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container" >
      <div className={`${Detail.layout} ${Detail.container}`}>
      <h2>{announcement.title}</h2>
      <p>作者: {announcement.author}</p>
      <p>上傳時間: {new Date(announcement.timestamp).toLocaleString()}</p>
      <div dangerouslySetInnerHTML={{ __html: announcement.content }}></div>
      </div>
    </div>
  );
};

export default AnnouncementDetail;
