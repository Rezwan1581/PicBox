// import React, { useState } from 'react';
// import Card from '../components/Card/card';

// const ImageItem = ({ image }) => {
//     const [isSelected, setIsSelected] = useState(false);

//     const toggleSelect = () => {
//         setIsSelected(!isSelected);
//     };

//     return (
//         <div className="relative w-64">
//             <Card>
//                 <div style={{ paddingBottom: '75%' }}>
//                     <img
//                         src={image}
//                         alt="Image"
//                         className="absolute inset-0 w-full h-full object-cover"
//                     />
//                 </div>

//                 {isSelected && (
//                     <div className="absolute top-0 left-0 flex items-center justify-center w-8 h-8 bg-green-500 opacity-75 group-hover:opacity-100 transition-opacity">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
//                             <path
//                                 d="M17.293 5.293a1 1 0 00-1.414-1.414L8 13.586l-3.879-3.879a1 1 0 10-1.414 1.414l4.586 4.586a1 1 0 001.414 0l8-8z"
//                             />
//                         </svg>
//                     </div>
//                 )}

//                 <div
//                     className={`absolute top-2 left-2 bg-white p-1 rounded-full cursor-pointer`}
//                     onClick={toggleSelect}
//                 >
//                     <input
//                         type="checkbox"
//                         checked={isSelected}
//                         readOnly
//                         className="hidden"
//                     />
//                     <label
//                         className="cursor-pointer text-gray-800"
//                     >
//                         &#10003;
//                     </label>
//                 </div>
//             </Card>
//         </div>
//     );
// };

// export default ImageItem;

import React, { useState } from 'react';
import Card from '../components/Card/card';

const ImageItem = ({ image }) => {
    const [isSelected, setIsSelected] = useState(false);

    const toggleSelect = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div className="relative">
            <Card>
                <img
                    src={image}
                    alt="Image"
                    className="w-full h-auto max-w-full max-h-40"
                />
            </Card>

            {isSelected && (
                <div className="absolute top-0 left-0 flex items-center justify-center w-8 h-8 bg-green-500 opacity-75 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                        <path
                            d="M17.293 5.293a1 1 0 00-1.414-1.414L8 13.586l-3.879-3.879a1 1 0 10-1.414 1.414l4.586 4.586a1 1 0 001.414 0l8-8z"
                        />
                    </svg>
                </div>
            )}

            <div
                className={`absolute top-2 left-2 bg-white p-1 rounded-full cursor-pointer`}
                onClick={toggleSelect}
            >
                <input
                    type="checkbox"
                    checked={isSelected}
                    readOnly
                    className="hidden"
                />
                <label
                    className="cursor-pointer text-gray-800"
                >
                    &#10003;
                </label>
            </div>
        </div>
    );
};

export default ImageItem;