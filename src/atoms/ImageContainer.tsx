'use client'

import { motion } from 'framer-motion'
import Image, { ImageProps } from 'next/image'
import AnimateUp from '~/common/BaseAnimation'

export const ImageContainer = (imgProps: ImageProps) => {

    const { src, alt, width, height } = imgProps
    const classStyles = `flex-shrink-0  block overflow-hidden relative aspect-w-16 
    aspect-h-9 bg-cover bg-no-repeat bg-center rounded-2xl`

    return (
        <>
            <AnimateUp margin='300px'>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={classStyles}
                />
            </AnimateUp>
        </>
    )
}
