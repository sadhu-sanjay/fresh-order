'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import AnimateUp from '~/components/common/BaseAnimation'
import { TailWindTextAlign, TailWindTextSizes, TextProps } from '~/shared/types'
import { animationEnabled } from '~/utils/config'

export const Heading3 = (
    { className,
        text,
        textAlign = 'text-left',
        animate = true,
        children,
        animateMargin
    }: {
        className?: string,
        text?: string,
        textAlign?: TailWindTextAlign,
        animate?: boolean,
        animateMargin?: string,
        children?: ReactNode
    }) => {


    const animationProperties = {
        initial: { y: '100%', opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true, margin: animateMargin },
        transition: { type: 'spring', stiffness: 100, delay: 0, mass: 2, damping: 30 },
    }

    const shouldTriggerAnimation = animationEnabled && animate

    return (
        <motion.div
            {...(shouldTriggerAnimation ? animationProperties : {})}
            className={` flex-shrink-0 w-auto h-auto whitespace-pre 
            break-words relative overflow-visible
            font-sans font-semibold
            dark:text-textHeadingDark text-textHeading  
            text-base
            tracking-tight leading-6 
            ${textAlign}
            ${className}
            flex flex-col jutify-center
            `} >
            {text}
            {children}
        </motion.div>
    )
}
