import React from 'react';

const Photo = (props) => {
    // props.slice(0,20)
    // console.log(props)
    // const {} = props
    return (
        <div className="card w-96 glass">
            <figure><img src={props.photo.thumbnailUrl} alt="car!"/></figure>
            <div className="card-body">
                <h2 className="card-title">{props.photo.title}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
            </div>
    );
};

export default Photo;