// Category.js
import React from 'react';
import Task from './Task';

const Category = ({ categoryName, tasks, onComplete, onDelete }) => {
    return (
        <section className="mb-4">
            <h2 className="text-xl font-semibold mb-3">{categoryName}</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
                {tasks.map(task => (
                    <Task 
                    key={task.id}
                    id={task.id} // Make sure to pass the id to the Task component 
                    title={task.title} 
                    dueDate={task.dueDate}
                    completed={task.completed} // Pass completed property 
                    onComplete={onComplete} // Pass onComplete function
                    onDelete={onDelete} // Pass onDelete function
                    />
                ))}
            </div>
        </section>
    );
};

export default Category;