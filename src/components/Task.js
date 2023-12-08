// Task.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Task = ({ title, dueTime, onComplete}) => {
    return (
       <div ClassName="bg-white shadow-lg rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">{title}</span>
            <span className="text-sm text-gray-600">{dueTime}</span>
            <button onClick={onComplete} aria-label="Mark as complete" className="text-green-500 hover:text-green-700">
                <FontAwesomeIcon icon={faCheck} size="lg" />
            </button>
       </div>
        </div>
    );
};

export default Task;