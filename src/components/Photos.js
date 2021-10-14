import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(function Photos(props) {
    const { history, data } = props;

    const clickImg = (photo) => {
        localStorage.setItem('currentImg', photo.url_s)
        localStorage.setItem('height', photo.height_s)
        localStorage.setItem('width', photo.width_s)
        history.push(`/SinglePhoto`)
    }

    return (
        <div className="row">
            {data.photo.map((p) => (
                <div className="col-3" key={p.id}>
                    <div className="thumbnail">
                        <img
                            src={p.url_s}
                            alt={p.url_s}
                            onClick={() => clickImg(p)}
                            className="img-responsive img-thumbnail"
                        />    </div>
                </div>
            ))}
        </div>
    )
})