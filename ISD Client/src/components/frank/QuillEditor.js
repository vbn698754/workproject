// QuillEditor.js
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = ({ onChange, value }) => {
  const handleEditorChange = (content) => {
    onChange(content);
  };

  return (
    <ReactQuill
      value={value}
      onChange={handleEditorChange}
      modules={{
        toolbar: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ color: [] }, { background: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image', 'video'],
          ['clean'],
        ],
      }}
    />
  );
};

export default QuillEditor;
