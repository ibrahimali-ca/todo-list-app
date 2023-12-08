// Task.js
import React from 'react';

const Task = ({ title, dueTime}) => {
    return (
        <div className="flex items-center justify-between p02 m-2 border-b-2 border-gray-200">
            <span className="text-lg">{title}</span>
            <span className="text-sm">{dueTime}</span>
            <button aria-label="Mark as complete" className="m1-2">
            {/* Checkmark icon here */}
            </button>
        </div>
    );
};

export default Task;