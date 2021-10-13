import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(function Photos(props) {
    const { history, data } = props;

    const clickImg = (url) => {
        localStorage.setItem('currentImg', url)
        history.push(`/SinglePhoto`)
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            {data.photo.map((p) => (
                <img
                    key={p.id}
                    src={p.url_s}
                    alt={p.url_s}
                    onClick={() => clickImg(p.url_s)}
                />
            ))}
        </div>
    )
})