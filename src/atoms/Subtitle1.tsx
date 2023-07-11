'use client'

import { TextProps } from "~/components/shared/types";
import { motion } from "framer-motion";

export const Subtitle1 = ({ props, className = '' }: { props: TextProps, className?: string }) => {
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
            <div className={`${className} ${alignment} rounded-xl
            flex-shrink-0 w-auto h-auto whitespace-pre-wrap
            break-words overflow-visible relative font-medium font-sans
            text-gray-500 leading-6 dark:text-gray-200 text-base`
            }>
                {text}
            </div>
        </motion.div>
    )
}
