'use client'

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { IconSun, IconMoon } from '@tabler/icons-react'
// import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'


const ToggleDarkMode = () => {

    const [mounted, setMounted] = useState<boolean>(false);
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;

    const handleOnClick = () => {
        
        console.log("Here & There")
        return setTheme(currentTheme === 'dark' ? 'light' : 'dark');

    }

    useEffect(() => {
        setMounted(true)
    }, []);

    return (
        <button
            onClick={handleOnClick}
            className="inline-block rounded-full p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            aria-label="Toggle Dark Mode"
        >
            {mounted ? (
                currentTheme === 'dark' ? (
                    <IconMoon className="animate-pendulum h-5 w-5" />
                ) : (
                    // add rotate in  animation
                    <IconSun className="animate-rotateIn h-5 w-5" />
                )) : (
                <div className="h-5 w-5"></div>
            )}
        </button>
    )

}

export default ToggleDarkMode;