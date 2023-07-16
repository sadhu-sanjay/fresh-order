'use client';
import { ThemeProvider } from 'next-themes';

interface ProvidorProps {
    children: React.ReactNode;
}

const ThemeController = ({ children }: ProvidorProps) => {
    return (
        <ThemeProvider attribute="class" >
            {children}
        </ThemeProvider>
    )
}

export { ThemeController }
