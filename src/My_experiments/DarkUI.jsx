import React, { useState } from 'react';
import './darkUi.css'
const DarkBtn = () => {
    // State to track the current mode (true for dark mode, false for light mode)
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Function to toggle between dark mode and light mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // You can add additional logic here to update your application's theme or styles
        // For example, updating CSS variables, applying different class names, etc.
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
    };

    return (
        <button id="darkBtn" onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkBtn;
