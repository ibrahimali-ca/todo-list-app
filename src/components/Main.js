import React, { useState } from 'react';
import Header from './Header';
import Category from './Category';
import TaskInputForm from './TaskInputForm'; // Import the TaskInputForm component

const Main = () => {
    // Define initial state for tasks using useState hook
    const [tasks, setTasks] = useState({
        school: [
            { id: 1, title: 'Differential Equations', dueDate: 'No due date', completed: false },
            { id: 2, title: 'Matrix Algebra', dueDate: 'No due date', completed: false },
            // ... other tasks
        ],
        personal: [],
        work: [],
    });

    const defaultCategory = "personal"; //Define a default category

    // Function to add a new task
    const addTask = (newTask, category) => { // Add category parameter
        const taskCategory = category && tasks[category] ? category : defaultCategory; // Use default category if category is not provided
        setTasks(prevTasks => ({ // Use the spread operator to add the new task to the tasks object
            ...prevTasks,
            [taskCategory]: [...(prevTasks[taskCategory] || []), { ...newTask, id: Date.now(), completed: false }] // Use the spread operator to add the new task to the tasks array
        }));
    };
    

    // Function to delete a task
    const toggleTaskCompletion = (category, taskId) => {
        // Update the tasks with the toggled task
        setTasks(prevTasks => ({
            ...prevTasks,
            [category]: prevTasks[category].map(task => 
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        }));
    };
    // Function to delete a task
    const deleteTask = (category, taskId) => {
        // Update the tasks state without the deleted task
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