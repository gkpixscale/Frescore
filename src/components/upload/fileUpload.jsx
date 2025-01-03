import React, { useState } from 'react';
import './fileUpload.css';
import logoupload from '../../assets/logoupload.png';
import FilePreview from './filePreviwe';

const fileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
    };

    return (
        <div className="upload-container">
            {!file ? (
                <label htmlFor="logo-upload" className="upload-label">
                    <div className="upload-content">
                        <img src={logoupload} alt="Upload Icon" />
                        <p className="upload-text">
                            Drop Your Logo here, Or <span>browse</span>
                        </p>
                    </div>
                    <input
                        id="logo-upload"
                        type="file"
                        className="file-input"
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                    />
                </label>
            ) : (
                <FilePreview file={file} onRemoveFile={handleRemoveFile} />
            )}
        </div>
    );
};

export default fileUpload;
