
import React, { useState, useEffect } from 'react';
import './ImageGallery.css';

import image1 from '../src/images/image-1.webp';
import image10 from '../src/images/image-10.jpeg';
import image11 from '../src/images/image-11.jpeg';
import image2 from '../src/images/image-2.webp';
import image3 from '../src/images/image-3.webp';
import image4 from '../src/images/image-4.webp';
import image5 from '../src/images/image-5.webp';
import image6 from '../src/images/image-6.webp';
import image7 from '../src/images/image-7.webp';
import image8 from '../src/images/image-8.webp';
import image9 from '../src/images/image-9.webp';
import image12 from '../src/images/image-12.webp';


import { SortableItem } from './SortableItem';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const imageObjects = [
    { id: 1, image: image1, isChecked: false },
    { id: 2, image: image2, isChecked: false },
    { id: 3, image: image3, isChecked: false },
    { id: 4, image: image4, isChecked: false },
    { id: 5, image: image5, isChecked: false },
    { id: 6, image: image6, isChecked: false },
    { id: 7, image: image7, isChecked: false },
    { id: 8, image: image8, isChecked: false },
    { id: 9, image: image9, isChecked: false },
    { id: 10, image: image10, isChecked: false },
    { id: 11, image: image11, isChecked: false },
    { id: 12, image: image12, isChecked: false },

];

export const CardContainer = () => {


    const [images, setImages] = React.useState(imageObjects);
    const [selectedImages, setSelectedImages] = useState([]);



    const moveCard = (fromIndex, toIndex) => {
        const updatedCards = [...images];
        //const [movedCard] = updatedCards.splice(fromIndex, 1);
        // updatedCards.splice(toIndex, 0, movedCard);
        var temp = updatedCards[fromIndex]
        updatedCards[fromIndex] = updatedCards[toIndex]
        updatedCards[toIndex] = temp
        //setImages(updatedCards);

        setImages(updatedCards)
    };
    const handleCheckboxChange = (id, isChecked) => {

        console.log(id, isChecked)

        setImages((items) =>
            items.map((item) =>
                item.id === id ? { ...item, isChecked: !item.isChecked } : item
            )
        );

        // Update selectedImages
        const selected = images.filter((item) => item.id === id && item.isChecked);
        setSelectedImages(selected);
    };
    const checkedItemCount = images.filter((img) => img.isChecked).length;

    function handleDeleteSelected() {
        // Remove selected images from the images state
        setImages((items) => items.filter((item) => !item.isChecked));

        // Clear the selectedImages state
        setSelectedImages([]);
    }
    return (

        <div>
            <div className="grid-container">
                <div className="left-panel">
                    {checkedItemCount === 0 ? (
                        <>
                            <h1>Gallery</h1>
                        </>
                    ) : (
                        <>
                            <h1>
                                {checkedItemCount} item{checkedItemCount !== 1 ? "s" : ""} selected
                            </h1>
                        </>
                    )}
                </div>

                <div className="right-panel">
                    {checkedItemCount > 0 && ( // Conditionally render the "Delete" button
                        <Button variant="danger" onClick={handleDeleteSelected}>
                            Delete
                        </Button>
                    )}
                </div>
            </div>

            <hr />
            <div className='image-box'>
                {images.length > 0 && images.map((img, index) => (
                    <SortableItem
                        key={index}
                        image={img.image}
                        index={index}
                        isChecked={img.isChecked}
                        onCheckboxChange={handleCheckboxChange}
                        moveCard={moveCard}
                        id={img.id}
                        isLastItem={index === images.length - 1} // Pass isLastItem
                    />
                ))}

            </div>
        </div>
    );
};