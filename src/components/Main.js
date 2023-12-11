import React, { useState } from 'react';
import Header from './Header';
import Category from './Category';
import TaskInputForm from './TaskInputForm'; // Import the TaskInputForm component

const Main = () => {
    // Define initial state for tasks using useState hook
    const [tasks, setTasks] = useState({
        mathHomework: [
            { id: 1, title: 'Differential Equations', dueTime: 'Due in 1 day, 24 hours, and 15 minutes', completed: false },
            { id: 2, title: 'Matrix Algebra', dueTime: 'Due in 2 days, 14 hours, and 15 minutes', completed: false },
            // ... other tasks
        ],
        // ... other categories if any
    });

    // Function to add a new task
    const addTask = (newTask) => {
        // Example: Add new task to 'mathHomework' category or any default category you choose
        setTasks({
            ...tasks,
            mathHomework: [...tasks.mathHomework, { ...newTask, id: Date.now(), completed: false }]
        });
    };

    // ... existing deleteTask and toggleTaskCompletion functions
    const toggleTaskCompletion = (category, taskId) => {
        setTasks(prevTasks => ({
            ...prevTasks,
            [category]: prevTasks[category].map(task => 
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        }));
    };
    
    const deleteTask = (category, taskId) => {
        setTasks(prevTasks => ({
            ...prevTasks,
            [category]: prevTasks[category].filter(task => task.id !== taskId)
        }));
    };
        
    return (
        <>
            <Header />
            <TaskInputForm onAddTask={addTask} /> {/* Include the TaskInputForm */}
            <main className="p-4">
                <h1 className="text-4xl font-bold mb-6">To-Do List</h1>
                {Object.entries(tasks).map(([categoryName, tasksInCategory]) => (
                    <Category 
                        key={categoryName} 
                        categoryName={categoryName} 
                        tasks={tasksInCategory}
                        onComplete={(taskId) => toggleTaskCompletion(categoryName, taskId)}
                        onDelete={(taskId) => deleteTask(categoryName, taskId)}
                    />
                ))}
            </main>
        </>
    );
};

export default Main;