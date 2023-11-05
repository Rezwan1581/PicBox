
// import React from 'react';

// const Card = ({ children }) => {
//     return (
//         <div className="max-w-sm rounded overflow-hidden shadow-lg">
//             <div className="px-6 py-4">
//                 {children}
//             </div>
//         </div>
//     );
// };

// export default Card;

import React, { useState } from 'react';
import './card.module.css'; // Import the associated CSS file

// const Card = ({ image }) => {
//     return (
//         <div className="card">
//             <img src={image} alt="Card" className="card-img" />
//         </div>
//     );
// };

// export default Card;

const Card = ({ image, isChecked, onCheckboxChange }) => {
    return (
        <div className={`card ${isChecked ? 'checked' : ''}`}>
            <input
                type="checkbox"
                className="card-checkbox"
                checked={isChecked}
                onChange={onCheckboxChange}
            />
            <img src={image} alt="Card" className="card-img" />
        </div>
    );
};

export default Card;

