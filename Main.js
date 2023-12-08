// Main.js

import React from 'react';
import Header from './Header';
import Category from '.Category';

//Sample data
const data = {
    mathHomework: [
        { id: 1, title: 'Differential Equations', dueTime: 'Due in 1 day, 24 hours, and 15 minutes'},
        { id: 2, title: 'Matrix Algebra', dueTime: 'Due in 2 days, 14 hours, and 15 minutes'}
        // ... other tasks
    ],
        // ...other categories
};

const Main = () => {
    return (
        <>
        <Header />
        <main className="p-4">
            <h1 className="text-4x1 font-bold mb-6">To-Do List</h1>
            {Object.entries(data).map(([categoryName, tasks]) => (
            <Category key={categoryName} categoryName={categoryName} tasks={tasks} />
            ))}
        </main>
        </>
    );
};

export default Main;