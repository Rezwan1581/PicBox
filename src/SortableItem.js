

// import React from 'react';
// import Card from 'react-bootstrap/Card';

// import './SortableItem.css';
// import { useDrag, useDrop } from 'react-dnd';
// const ItemType = 'CARD';
// const SortableItem = ({ image, index, isChecked, onCheckboxChange, moveCard, id }) => {

//     const [, ref] = useDrag({
//         type: ItemType,
//         item: { index },
//     });

//     const [, drop] = useDrop({
//         accept: ItemType,
//         hover: (draggedItem) => {
//             if (draggedItem.index !== index) {
//                 moveCard(draggedItem.index, index);
//                 draggedItem.index = index;
//             }
//         },
//     });



//     /* const style = {
//         transform: CSS.Transform.toString(transform),
//         transition
//     }; */

//     const handleCheckboxChange = (e) => {
//         console.log(e)
//         onCheckboxChange(id, e.target.checked);
//     };


//     return (
//         <div ref={(node) => ref(drop(node))} >
//             {/*  <div className={`Card ${props.isChecked ? 'checked' : ''}`}> */}
//             <Card>
//                 <input
//                     type="checkbox"
//                     className="card-checkbox"
//                     checked={isChecked}
//                     onChange={handleCheckboxChange}
//                 />
//                 <img src={image} alt="something" className="card-image" />
//             </Card>
//             {/*  </div> */}
//         </div>
//     );
// }


// export { SortableItem }
import React from 'react';
import Card from 'react-bootstrap/Card';

import './SortableItem.css';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'CARD';

const SortableItem = ({ image, index, isChecked, onCheckboxChange, moveCard, id, isLastItem }) => {
    const [, ref] = useDrag({
        type: ItemType,
        item: { index },
    });

    const [, drop] = useDrop({
        accept: ItemType,
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveCard(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    const handleCheckboxChange = (e) => {
        onCheckboxChange(id, e.target.checked);
    };

    return (
        <div ref={(node) => ref(drop(node))}>
            <Card>
                {isLastItem ? (
                    <img src={image} alt="something" className="card-image" />
                ) : (
                    <>
                        <input
                            type="checkbox"
                            className="card-checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <img src={image} alt="something" className="card-image" />
                    </>
                )}
            </Card>
        </div>
    );
};

export { SortableItem };


