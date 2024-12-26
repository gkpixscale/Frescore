import React, { useState } from "react";
import './LogoUploader.css'

function LogoUploader() {
    const [logo, setLogo] = useState(null); 
    const [dragging, setDragging] = useState(false); 

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setLogo(URL.createObjectURL(file)); 
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setDragging(false);
        const file = event.dataTransfer.files[0];
        if (file) {
            setLogo(URL.createObjectURL(file));
        }
    };

    return (
        <div
            className={`upload-container`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >

            <div className="upload-placeholder">
                <i class="fa-solid fa-upload"></i>
                <p>Drop Your Logo here, Or <span className="browse-link">browse</span></p>
                <input
                    type="file"
                    accept="image/*"
                    className="file-input"
                    onChange={handleFileChange}
                    required
                />
            </div>

        </div>
    );
}

export default LogoUploader;
