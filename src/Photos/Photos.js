import React, { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';

const Photos = () => {
    const [photos, setPhotos] = useState([])
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setPhotos(data))
    },[])
    return (
        <div>
          <h1 className='mt-12 font-bold lg:text-6xl  '>Photos Gallary</h1>
          <h5 className='lg:text-4xl mt-8'>Total Photo: {photos.length}</h5>
          <div className='mt-16 grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center'>
            {
                photos.map(photo => <Photo photo={photo}></Photo>)
            }
          </div>
        </div>
    );
};

export default Photos;