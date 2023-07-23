'use client'

import { motion } from 'framer-motion'
import AnimateUp from '~/components/common/BaseAnimation'
import { TailWindTextAlign, TailWindTextSizes, TextProps } from '~/shared/types'

export const Heading3 = ({ className, text, textAlign = 'text-left', animate = true }: { className?: string, text?: string, textAlign?: TailWindTextAlign, animate?: boolean }) => {

    return animate ? (
        <AnimateUp>
            <TextContainer />
        </AnimateUp>
    ) : (
        <TextContainer />
    );

    function TextContainer() {
        return (
            <div
                className={` flex-shrink-0 w-auto h-auto whitespace-pre break-words relative overflow-visible
            font-bold font-sans
            dark:text-textHeadingDark text-textHeading  
            text-2xl
            tracking-tight leading-6 
            ${textAlign}
            `} >
                {text}
            </div>
        )
    }
}
