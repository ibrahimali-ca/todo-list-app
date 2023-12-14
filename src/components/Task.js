// Task.js
// Import necessary libraries and styles
import React from 'react';
import styles from './Task.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// Define the Task component
const Task = ({ id, title, completed, dueDate, onComplete, onDelete}) => {
    // Determine the CSS class based on whether the task is completed
    const taskClass = completed ? styles.completedTask : styles.incompleteTask;

    // Return the JSX for the Task component
    return (
        // The task container with dynamic CSS class and hover effect
        <div className={`${taskClass} bg-white p-4 m-2 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:scale-105`}>      
            <div className="flex justify-between items-center">
                {/* Display the task title */}
                <span className="text-lg font-semibold text-gray-800">{title}</span>
                {/* Display the task due date */}
                <span className="text-sm text-gray-600">{dueDate}</span>
            </div> 
            <div>           
                {/* Button to mark the task as complete */}
                <button onClick={() => onComplete(id)} aria-label="Mark as complete" className="text-green-500 hover:text-green-700">
                    <FontAwesomeIcon icon={faCheck} size="lg" />
                </button>
                {/* Button to delete the task */}
                <button onClick={() => onDelete(id)} aria-label="Delete task" className="text-red-500 hover:text-red-700">
                    🗑️
                </button>
            </div>
        </div>
    );
};

// Export the Task component as the default export
export default Task;