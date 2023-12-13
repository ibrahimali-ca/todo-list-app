import React, { useState } from 'react';

const TaskInputForm = ({ onAddTask, categories }) => {
        const [title, setTitle] = useState('');
        const [dueTime, setDueTime] = useState('');
        const [selectedCategory, setSelectedCategory] = useState(categories[0] || '');

        const handleSubmit = (event) => {
            event.preventDefault();

            // Debugging: Log the title and dueTime
        console.log("Submitting:", title, dueTime);

            onAddTask({ title, dueTime }, selectedCategory,); // Pass the new task to the parent component
            setTitle('');
            setDueTime('');
        };
    
return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Title"
        />
        <input
            type="text"
            value={dueTime}
            onChange={(e) => setDueTime(e.target.value)}
            placeholder="Due Time"
        />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
        <button type="submit">Add Task</button>
    </form>
    );
};

export default TaskInputForm;