import React, { useEffect, useState } from 'react';
import './filePreview.css';

const filePreview = ({ file, onRemoveFile }) => {
  const [filePreview, setFilePreview] = useState(null);

  useEffect(() => {
    if (file) {
      if (file.type.startsWith('image/')) {
        setFilePreview(URL.createObjectURL(file));
      } else if (file.type === 'application/pdf') {
        setFilePreview('/path/to/pdf-preview-icon.png');
      }
    }
    return () => {
      if (filePreview) {
        URL.revokeObjectURL(filePreview);
      }
    };
  }, [file]);

  return (
    <div className="file-preview">
      {file.type.startsWith('image/') ? (
        <img src={filePreview} alt="File Preview" className="file-preview-image" />
      ) : (
        <div className="pdf-preview">
          <p>{file.name}</p>
        </div>
      )}
      <button className="remove-file-button" onClick={onRemoveFile}>
        &times;
      </button>
    </div>
  );
};

export default filePreview;
