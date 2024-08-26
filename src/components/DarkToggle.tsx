'use client';
import { FC, useEffect, useState } from 'react';

interface Props { }

const DarkToggle: FC<Props> = (): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check for stored preference
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('darkMode');
            return savedMode === 'true';
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="p-2 m-2">
            <label className="flex cursor-pointer gap-2">
                {/* Sun SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-black ${isDarkMode ? 'hidden' : 'block'}`}
                >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                    aria-label="Toggle light/dark mode"
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    className="toggle theme-controller"
                />
                {/* Moon SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-white ${isDarkMode ? 'block' : 'hidden'}`}
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            </label>
        </div>
    );
};

export default DarkToggle;
