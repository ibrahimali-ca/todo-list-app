// Task.js
import React from 'react';
import styles from './Task.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Task = ({ id, title, completed, dueTime, onComplete, onDelete}) => {
    const taskClass = completed ? styles.completedTask : styles.incompleteTask; // Add CSS classes as needed
    // console.log("Completed:", completed, "Class:", taskClass);
    return (
        <div className={`${taskClass} bg-white p-4 m-2 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:scale-105`}>      
            <div className="flex justify-between items-center">
                {/* {Other tasks and details and delete button} */}
                <span className="text-lg font-semibold text-gray-800">{title}</span>
                <span className="text-sm text-gray-600">{dueTime}</span>
                </div> 
                <div>           
                    <button onClick={() => onComplete(id)} aria-label="Mark as complete" className="text-green-500 hover:text-green-700">
                        <FontAwesomeIcon icon={faCheck} size="lg" />
                    </button>
                    <button onClick={() => onDelete(id)} aria-label="Delete task" className="text-red-500 hover:text-red-700">
                🗑️
                    </button>
                </div>
            </div>
    );
};

export default Task;