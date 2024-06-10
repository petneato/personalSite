import React from 'react';

const StackItem = ({ index, stack }) => {
    return (
        <div className={`min-w-48 min-h-12 flex items-center justify-center ${stack.color} `}>
            <img src={stack.logo} alt={`${stack.name} logo`} className="h-8 mr-2" />
            <span className="text-white font-bold">{stack.name}</span>
        </div>
    );

};

export default StackItem;