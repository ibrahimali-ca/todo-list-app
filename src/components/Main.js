// Main.js

import React, { useState } from 'react';
import Header from './Header';
import Category from './Category';

const Main = () => {
    // Define initial state for tasks using useState hook
    const [tasks, setTasks] = useState({
        mathHomework: [
            { id: 1, title: 'Differential Equations', dueTime: 'Due in 1 day, 24 hours, and 15 minutes', completed: false},
            { id: 2, title: 'Matrix Algebra', dueTime: 'Due in 2 days, 14 hours, and 15 minutes', completed: false},
            // ... other tasks
        ],
        // ...other categories
    });

    // Function to add a new task (example - this will need to be integrated into your UI)
    const addTask = (category, newTask) => {
        setTasks({
            ...tasks,
            [category]: [...tasks[category], newTask]
        });
    };

    // Function to delete a task
    const deleteTask = (category, taskId) => {
        setTasks({
            ...tasks,
            [category]: tasks[category].filter(task => task.id !== taskId)
        });
    };

    // Function to mark a task as complete
    // This assumes tasks have a 'completed' property that you toggle
    const toggleTaskCompletion = (category, taskId) => {
        setTasks({
            ...tasks,
            [category]: tasks[category].map(task => 
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        });
    };

    return (
        <>
            <Header />
            <main className="p-4">
                <h1 className="text-4xl font-bold mb-6">To-Do List</h1>
                {Object.entries(tasks).map(([categoryName, tasksInCategory]) => (
                    <Category 
                        key={categoryName} 
                        categoryName={categoryName} 
                        tasks={tasksInCategory} // Pass tasks in category
                        onComplete={(taskId) => toggleTaskCompletion(categoryName, taskId)} // Scoped to the category
                        onDelete={(taskId) => deleteTask(categoryName, taskId)} // Scoped to the category
                        addTask={addTask}
                        deleteTask={deleteTask} 
                        toggleTaskCompletion={toggleTaskCompletion}
                    />
                ))}
            </main>
        </>
    );
};

export default Main;
