import React from 'react';

export default function SinglePhoto() {
    const url =localStorage.getItem('currentImg');
    
    return (
        <div className="d-flex justify-content-center align-items-center">
            <img src={url} />
        </div>
    )
}


