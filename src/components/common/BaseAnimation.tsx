'use client';

import { animationEnabled } from '~/utils/config.js'
import { delay, motion } from 'framer-motion';
import { useRef } from 'react';

const AnimateUp = (
    {
        children,
        delay = 0.2,
        margin = ''
    }: {
        children: React.ReactNode,
        delay?: number
        margin?: string
    }) => {

    return (
        <>
            {animationEnabled ? <motion.div
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: margin }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    delay: delay, // 0.2
                    mass: 2,
                    damping: 30
                }}
            >
                {children}
            </motion.div> : children}
        </>
    );
};

export default AnimateUp;
