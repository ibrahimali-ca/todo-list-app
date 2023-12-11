import React, { useState } from 'react';

const TaskInputForm = ({ onAddTask }) => {
        const [title, setTitle] = useState('');
        const [dueTime, setDueTime] = useState('');

        const handleSubmit = (event) => {
            event.preventDefault();
            onAddTask({ title, dueTime });
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
        <button type="submit">Add Task</button>
    </form>
    );
};

export default TaskInputForm;