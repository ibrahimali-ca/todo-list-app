import React, { useState } from 'react';
import Header from './Header';
import Category from './Category';
import TaskInputForm from './TaskInputForm'; // Import the TaskInputForm component

const Main = () => {
    // Define initial state for tasks using useState hook
    const [tasks, setTasks] = useState({
        school: [
            { id: 1, title: 'Differential Equations', dueTime: 'Due in 1 day, 24 hours, and 15 minutes', completed: false },
            { id: 2, title: 'Matrix Algebra', dueTime: 'Due in 2 days, 14 hours, and 15 minutes', completed: false },
            // ... other tasks
        ],
        personal: [],
        work: [],
        general: [] // Initialize the default category
    });

    const defaultCategory = "general"; //Define a default category

    // Function to add a new task
    const addTask = (newTask, category) => { // Add category parameter
        const taskCategory = category && tasks[category] ? category : defaultCategory; // Use default category if category is not provided
        setTasks(prevTasks => ({ // Use the spread operator to add the new task to the tasks object
            ...prevTasks,
            [taskCategory]: [...(prevTasks[taskCategory] || []), { ...newTask, id: Date.now(), completed: false }] // Use the spread operator to add the new task to the tasks array
        }));
        console.log("Adding to category:", taskCategory, "Task:", newTask);
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
    // Function to delete a task
    const deleteTask = (category, taskId) => {
        setTasks(prevTasks => ({
            ...prevTasks,
            [category]: prevTasks[category].filter(task => task.id !== taskId)
        }));
    };
    // Define your categories
    const categories = ['school', 'personal', 'work']; 

    return (
        <>
            <Header />
            <TaskInputForm onAddTask={addTask} categories={categories} /> {/* Include the TaskInputForm */}
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