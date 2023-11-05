// import React, { useState } from 'react';
// import ImageItem from './ImageItem';

// const ImageGallery = () => {
//     const imageContext = require.context('../../public/images', false, /\.(webp|jpeg|png)$/);
//     const imagePaths = imageContext.keys();

//     const [images, setImages] = useState(imagePaths);

//     // Implement image sorting and setting a feature image functionality here

//     return (
//         <div className="image-gallery">
//             {images.map((image, index) => (
//                 <ImageItem key={index} image={imageContext(image)} />
//             ))}
//         </div>
//     );
// };

// export default ImageGallery;

import React from 'react';
import Card from '../components/Card/card';
import '../components/ImageGallery.css';

import card1 from '../images/image-1.webp';
import card2 from '../images/image-2.webp';
import card3 from '../images/image-3.webp';
import card4 from '../images/image-4.webp';



const ImageGallery = () => {
    return (
        <div>
            <div>
                <h1>Gallery</h1>
            </div>
            <div className="cardsContainers">
                <div className="cardStyling">
                    <Card image={card1} ></Card>
                    <Card image={card2} ></Card>
                    <Card image={card3} ></Card>
                    <Card image={card3} ></Card>
                    <Card image={card3} ></Card>
                    <Card image={card3} ></Card>
                    <Card image={card1} ></Card>
                    <Card image={card2} ></Card>
                    <Card image={card3} ></Card>
                    <Card image={card3} ></Card>
                    <Card image={card3} ></Card>
                    <Card image={card3} ></Card>

                </div>
            </div>
        </div>

    );
};

export default ImageGallery;









