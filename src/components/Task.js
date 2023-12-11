// Task.js
import React from 'react';
import styles from './Task.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Task = ({ id, title, completed, dueTime, onComplete, onDelete}) => {
    const taskClass = completed ? styles.completedTask : styles.incompleteTask; // Add CSS classes as needed

    return (
        <>
            <div className={taskClass}>
                <span>{title}</span>
                <button onClick={() => onComplete(id)}>Complete</button>
                {/* {Other tasks and details and delete button} */}
            </div>
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">{title}</span>
                    <span className="text-sm text-gray-600">{dueTime}</span>
        </div>
        <button onClick={() => onComplete(id)} aria-label="Mark as complete" className="text-green-500 hover:text-green-700">
            <FontAwesomeIcon icon={faCheck} size="lg" />
        </button>
        <button onClick={() => onDelete(id)} aria-label="Delete task" className="text-red-500 hover:text-red-700">
                🗑️
        </button>
        </div>
    </>
    );
};

export default Task;