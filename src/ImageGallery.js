import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './ImageGallery.css';
import { SortableItem } from './SortableItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CardContainer } from './CardContainer'; // Update import

const ImageGallery = () => {

    return (
        <div>

            <DndProvider backend={HTML5Backend}>


                <CardContainer >  </CardContainer>


            </DndProvider>

        </div>
    );
};

export default ImageGallery;










