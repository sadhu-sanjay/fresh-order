'use client';

import { ThemeProvider } from 'next-themes';

interface ProvidorProps {
    children: React.ReactNode;
}

const ThemeController = ({children}: ProvidorProps) => {
    return (
        <ThemeProvider disableTransitionOnChange attribute='class' defaultTheme='system'>
            {children}
        </ThemeProvider>
    )
}

export { ThemeController }
