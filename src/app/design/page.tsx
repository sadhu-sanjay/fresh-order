'use client'
import dynamic from 'next/dynamic';
const Preview = dynamic(() => import('~/app/design/Preview'), {
    ssr: false
})
import { useState } from 'react';
import Editor from '~/app/design/editor';
import Navigator from '~/app/design/navigator';

const sGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(13, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
    width: '100%',
    height: '100%',
}

export default function Design() {

    const [design, setDesign] = useState('https://konvajs.org/assets/lion.png')

    function onImageSelect(img: string) {
        setDesign(img)
    }

    return (
        <div style={sGrid} className='absolute w-full h-full left-0 right-0 '>
            <div className='col-[1/14] row-[1/2]'>
                <Navigator />
            </div>

            <div className='bg-pink-900 col-[1/14] row-[2/9] lg:col-[2/14] lg:row-[2/10] '>
                {/* <App /> */}
                <Preview design={design} />
            </div>

            <aside className='bg-blue-900 col-[1/14] row-[9/10] lg:col-[1/2] lg:row-[2/10] '>
                <Editor onImageSelect={onImageSelect} />
            </aside>
        </div>
    )

}
