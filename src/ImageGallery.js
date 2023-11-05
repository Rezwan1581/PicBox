
// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import { DndContext, closestCenter } from "@dnd-kit/core";
// import { arrayMove, SortableContext, verticalListSortingStrategy, rectSwappingStrategy, horizontalListSortingStrategy } from "@dnd-kit/sortable";
// import { SortableItem } from './SortableItem';
// import './ImageGallery.css';

// import image1 from '../src/images/image-1.webp';
// import image2 from '../src/images/image-2.webp';
// import image3 from '../src/images/image-3.webp';
// import image4 from '../src/images/image-4.webp';
// import image5 from '../src/images/image-5.webp';
// import image6 from '../src/images/image-6.webp';
// import image7 from '../src/images/image-7.webp';
// import image8 from '../src/images/image-8.webp';
// import image9 from '../src/images/image-9.webp';
// import image10 from '../src/images/image-10.jpeg';
// import image11 from '../src/images/image-11.jpeg';

// // const imageOne = {
// //     id: 1,
// //     image: image1
// // };

// // const imageTwo = {
// //     id: 2,
// //     image: image2
// // };

// // const imageThree = {
// //     id: 3,
// //     image: image3
// // };

// // const imageFour = {
// //     id: 4,
// //     image: image4
// // };

// // const imageFive = {
// //     id: 5,
// //     image: image5
// // };

// // const imageSix = {
// //     id: 6,
// //     image: image6
// // };

// // const imageSeven = {
// //     id: 7,
// //     image: image7
// // };

// // const imageEight = {
// //     id: 8,
// //     image: image8
// // };

// // const imageNine = {
// //     id: 9,
// //     image: image9
// // };

// // const imageTen = {
// //     id: 10,
// //     image: image10
// // };

// // const imageEleven = {
// //     id: 11,
// //     image: image11
// // };

// const imageObjects = [
//     { id: 1, image: image1 },
//     { id: 2, image: image2 },
//     { id: 3, image: image3 },
//     { id: 4, image: image4 },
//     { id: 5, image: image5 },
//     { id: 6, image: image6 },
//     { id: 7, image: image7 },
//     { id: 8, image: image8 },
//     { id: 9, image: image9 },
//     { id: 10, image: image10 },
//     { id: 11, image: image11 },
// ];

// const ImageGallery = () => {
//     const [images, setImages] = useState(imageObjects);

//     function handleDragEnd(event) {
//         const { active, over } = event;

//         if (active.id !== over.id) {
//             setImages((items) => {
//                 const activeIndex = items.findIndex((obj) => obj.id === active.id);
//                 const overIndex = items.findIndex((obj) => obj.id === over.id);
//                 return arrayMove(items, activeIndex, overIndex);
//             });
//         }
//     }

//     return (
//         <>
//             <h1>My App</h1>
//             <hr></hr>
//             <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//                 <Container className='image-box'>
//                     <SortableContext items={images} strategy={horizontalListSortingStrategy} className="sortable-context">
//                         {images.map((img) => <SortableItem key={img.id} id={img.id} image={img.image} />)}
//                     </SortableContext>
//                 </Container>
//             </DndContext>
//         </>
//     );
// };

// export default ImageGallery;

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from './SortableItem';
import './ImageGallery.css';

import image1 from '../src/images/image-1.webp';
import image2 from '../src/images/image-2.webp';
import image3 from '../src/images/image-3.webp';
import image4 from '../src/images/image-4.webp';
import image5 from '../src/images/image-5.webp';
import image6 from '../src/images/image-6.webp';
import image7 from '../src/images/image-7.webp';
import image8 from '../src/images/image-8.webp';
import image9 from '../src/images/image-9.webp';
import image10 from '../src/images/image-10.jpeg';
import image11 from '../src/images/image-11.jpeg';

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
];

const ImageGallery = () => {
    const [images, setImages] = useState(imageObjects);
    const [selectedImages, setSelectedImages] = useState([]);

    function handleCheckboxChange(id) {
        setImages((items) =>
            items.map((item) =>
                item.id === id ? { ...item, isChecked: !item.isChecked } : item
            )
        );

        // Update selectedImages
        const selected = images.filter((item) => item.id === id && item.isChecked);
        setSelectedImages(selected);
    }

    function handleDeleteSelected() {
        // Remove selected images from the images state
        setImages((items) => items.filter((item) => !item.isChecked));

        // Clear the selectedImages state
        setSelectedImages([]);
    }


    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setImages((items) => {
                const activeIndex = items.findIndex((obj) => obj.id === active.id);
                const overIndex = items.findIndex((obj) => obj.id === over.id);
                return arrayMove(items, activeIndex, overIndex);
            });
        }
    }


    const checkedItemCount = images.filter((img) => img.isChecked).length;

    console.log("checkedItemCount--->", checkedItemCount)

    return (
        <div>
            <div class="grid-container">
                <div class="left-panel">
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
                <div class="right-panel">
                    {checkedItemCount > 0 && (
                        <Button variant="danger" onClick={handleDeleteSelected}>
                            Delete
                        </Button>
                    )}
                </div>
            </div>
            <hr />
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <Container className='image-box'>
                    <SortableContext items={images} strategy={horizontalListSortingStrategy} className="sortable-context">
                        {images.map((img) => (
                            <SortableItem
                                key={img.id}
                                id={img.id}
                                image={img.image}
                                isChecked={img.isChecked}
                                onCheckboxChange={() => handleCheckboxChange(img.id)}
                            />
                        ))}
                    </SortableContext>
                </Container>
            </DndContext>
        </div>
    );
};

export default ImageGallery;




