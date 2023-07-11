'use client'

import { motion } from 'framer-motion'
import AnimateUp from '~/common/BaseAnimation'
import { TailWindTextAlign, TailWindTextSizes, TextProps } from '~/components/shared/types'

export const Heading3 = ({ text, textAlign = 'text-left' }: { text?: string, textAlign?: TailWindTextAlign }) => {

    return (
        <AnimateUp>
            <div
                className={` flex-shrink-0 w-auto h-auto whitespace-pre break-words relative overflow-visible
                font-semibold font-sans 
                dark:text-textHeadingDark text-textHeading  
                text-base 
                tracking-tight leading-6 
                ${textAlign}
                `} >
                {text}
            </div>
        </AnimateUp>
    )
}
