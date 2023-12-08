// Category.js
import React from 'react';
import Task from './Task';

const Category = ({ categoryName, tasks }) => {
    return (
        <section className="mb-4">
            <h2 className="text-xl font-semibold mb-3">{categoryName}</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
                {tasks.map(task => (
                    <Task key={task.id} title={task.title} dueTime={task.dueTime} />
                ))}
            </div>
        </section>
    );
};

export default Category;