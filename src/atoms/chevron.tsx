'use client'
import { motion } from 'framer-motion'
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react'

export const Chevron = ({ direction, callback }: { direction: string, callback: () => void }) => {

    const icon = direction === 'right'
        ? <IconChevronRight style={{ color: 'white' }} size={25} />
        : <IconChevronLeft style={{ color: 'white' }} size={25} />

    return (
        <motion.button
            className={`next-button absolute top-1/2 ${direction == 'right' ? 'right-4' : 'left-4'} transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full opacity-30 `}
            onClick={callback}
            whileHover={{ scale: 1.1 }
            }
            whileTap={{ scale: 0.9 }}
        >
            {icon}
        </motion.button >
    )
}

