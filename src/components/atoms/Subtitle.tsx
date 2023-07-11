'use client'

import { TextProps } from "~/components/shared/types";
import { motion } from "framer-motion";

export const Subtitle = ({ props, className =''  }: { props: TextProps, className?: string }) => {
    const { text, alignment } = props;

    return (
        <motion.div
            initial={{ y: 55, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.2,
                mass: 1,
                damping: 30
            }}
        >
            {/* <div 
            className="dark:text-gray-200 flex-shrink-0 w-auto h-auto 
            whitespace-pre-wrap break-words overflow-visible flex-1 flex-grow-0  
            min-w-0 relative font-medium font-sans text-gray-500 text-lg 
            tracking-tighter leading-tight text-start"> */}
            <div className={`${className} ${alignment} flex-shrink-0 w-full h-auto whitespace-pre-wrap
             break-words overflow-visible relative font-medium font-sans dark:text-gray-200
              text-gray-500 text-2xl leading-9`} >
                {text}
            </div>
        </motion.div>
    )
}
