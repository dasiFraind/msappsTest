import React from 'react';

export default function SinglePhoto() {
    const url = localStorage.getItem('currentImg');

    // dfsdfs
    return (
            <div className="d-flex justify-content-center align-items-center">
                <img src={url} alt={url}/>
            </div>
    )
}


