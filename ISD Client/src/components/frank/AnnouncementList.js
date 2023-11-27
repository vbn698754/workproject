import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/announcement/list')
      .then(response => {
        const sortedAnnouncements = response.data.sort((a, b) => a.timestamp - b.timestamp);
        console.log('Sorted data:', sortedAnnouncements);
        setAnnouncements([...sortedAnnouncements]);
      })
      .catch(error => console.error('Error fetching announcements:', error));
  }, []);
  
  
    return (
    <div className="container">
      <h2>部門公告</h2>
      <ul className="list-group">
        {announcements.map((announcement) => (
          <li key={announcement._id} className="list-group-item">
            <Link to={`/announcement/${announcement._id}`}>
              <h4>{announcement.title}</h4>
            </Link>
            <p>作者: {announcement.author}</p>
            <p>上傳時間: {new Date(announcement.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementList;
