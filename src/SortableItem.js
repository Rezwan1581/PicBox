// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import Card from 'react-bootstrap/Card';

// import './SortableItem.css'; // Import the CSS file

// export function SortableItem(props) {
//     const { id, image, isChecked, onCheckboxChange } = props;
//     const {
//         attributes,
//         listeners,
//         setNodeRef,
//         transform,
//         transition,
//         isDragging
//     } = useSortable({ id: props.id });

//     const itemClass = `sortable-item ${isDragging ? 'is-dragging' : ''}`;

//     const style = {
//         transform: CSS.Transform.toString(transform),
//         transition
//     };

//     return (
//         <div ref={setNodeRef} className={itemClass} style={style} {...attributes} {...listeners} >
//             <div className={`Card ${props.isChecked ? 'checked' : ''}`}>
//                 <Card>
//                     <img src={props.image} alt="something" className="card-image" />
//                     <input
//                         type="checkbox"
//                         className="card-checkbox"
//                         checked={props.isChecked}
//                         onChange={() => onCheckboxChange(id)}
//                     />
//                 </Card>
//             </div>
//         </div>
//     );
// }

import React from 'react';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Card from 'react-bootstrap/Card';

import './SortableItem.css';

export function SortableItem(props) {
    const { id, image, isChecked, onCheckboxChange } = props;
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: props.id });

    const itemClass = `sortable-item ${isDragging ? 'is-dragging' : ''}`;

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    // This handler is separate from Dnd-kit's listeners
    const handleCheckboxChange = () => {
        onCheckboxChange(id);
    };

    return (
        <div ref={setNodeRef} className={itemClass} style={style} {...attributes} {...listeners}>
            <div className={`Card ${props.isChecked ? 'checked' : ''}`}>
                <Card>
                    <img src={props.image} alt="something" className="card-image" />
                    <input
                        type="checkbox"
                        className="card-checkbox"
                        checked={props.isChecked}
                        onChange={handleCheckboxChange} // Handle checkbox change independently
                    />
                </Card>
            </div>
        </div>
    );
}




