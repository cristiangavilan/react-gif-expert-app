import React from 'react';

const GifGridItem = ({ title, url }) => {
    // console.log({ id, title, url });
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    );
};

export default GifGridItem;
