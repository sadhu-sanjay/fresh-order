'use client'

import { motion } from 'framer-motion'
import AnimateUp from '~/common/BaseAnimation'
import { TailWindTextAlign, TailWindTextSizes, TextProps } from '~/components/shared/types'

export const Heading = ({ text, textAlign = 'text-center' }: { text?: string, textAlign?: TailWindTextAlign }) => {

    return (
        <AnimateUp>
            <div
                className={`flex-shrink-0 w-auto h-auto 
                whitespace-pre-wrap break-words overflow-visible relative font-bold 
                font-sans dark:text-textHeadingDark text-textHeading 
                md:text-6xl lg:text-7xl text-5xl ${textAlign}
                tracking-tight leading-tight `} >
                {text}
            </div>
        </AnimateUp>
    )
}
