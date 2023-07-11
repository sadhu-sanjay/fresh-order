'use client'

import { motion } from 'framer-motion'
import AnimateUp from '~/common/BaseAnimation'
import { TailWindTextAlign, TailWindTextSizes, TextProps } from '~/components/shared/types'

export const Heading2 = ({ text, textAlign = 'text-left' }: { text?: string, textAlign?: TailWindTextAlign }) => {

    return (
        <AnimateUp>
            <div
                className={`${textAlign} flex-shrink-0 w-auto h-auto whitespace-pre-wrap break-words overflow-visible relative 
                font-bold font-sans
                dark:text-textHeadingDark text-textHeading 
                lg:text-5xl md:text-4xl text-3xl 
                tracking-tight leading-tight
                `} >
                {text}
            </div>
        </AnimateUp>
    )
}
