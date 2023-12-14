import React, { useState } from 'react';

const TaskInputForm = ({ onAddTask, categories }) => {
        const [title, setTitle] = useState('');
        const [dueDate, setDueDate] = useState('');
        const [selectedCategory, setSelectedCategory] = useState(categories[0] || '');

        const handleSubmit = (event) => {
            event.preventDefault(); 
            onAddTask({ title, dueDate }, selectedCategory,); // Pass the new task to the parent component
            setTitle('');
            setDueDate('');
        };

return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center">
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Title"
            className="w-full p-2 border-2 border-gray 200 rounded-md"
        />
        <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="form-input px-4 py-2 border rounded"
            />

        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
        className="p-2 border-2 border-gray-200 rounded-md"
        >
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:underline">Add Task</button>
    </form>
    );
};

export default TaskInputForm;