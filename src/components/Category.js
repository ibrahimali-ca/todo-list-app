// Category.js
import React from 'react';
import Task from './Task';

// The Category component receives categoryName, tasks, onComplete, and onDelete as props
const Category = ({ categoryName, tasks, onComplete, onDelete }) => {
    return (
        <section className="mb-4">
            <h2 className="text-xl font-semibold mb-3">{categoryName}</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
                {tasks.map(task => (
                    <Task 
                    key={task.id} // Unique key for each task
                    id={task.id} // Pass the id to the Task component 
                    title={task.title} // Pass the title to the Task component
                    dueDate={task.dueDate} // Pass the due date to the Task component
                    completed={task.completed} // Pass the completed status to the Task component
                    onComplete={onComplete} // Pass the onComplete function to the Task component
                    onDelete={onDelete} // Pass the onDelete function to the Task component
                    />
                ))}
            </div>
        </section>
    );
};

// Export the Category component for use in other files
export default Category;