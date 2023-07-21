'use client'
import dynamic from 'next/dynamic';
const Preview = dynamic(() => import('~/app/design/Preview'), {
    ssr: false
})
import { useEffect, useRef, useState } from 'react';
import Editor from '~/app/design/editor';
import Navigator from '~/app/design/navigator';

const initialAssets: Array<Asset> = [
    {
        id: '1',
        nm: 'tshirt',
        direction: 'front',
        color: 'blue',
        size: 'm',
        front: [
            {
                id: 'd2',
                asset: 'https://konvajs.org/assets/lion.png',
                preview: 'https://konvajs.org/assets/lion.png',
                position: {
                    isDraggable: false,
                    width: 144,
                    height: 139,
                    x: 0,
                    y: 0
                }
            }
        ],
        back: [
            {
                id: 'd1',
                asset: 'https://konvajs.org/assets/lion.png',
                preview: 'https://konvajs.org/assets/giraffe.png',
                position: {
                    isDraggable: false,
                    width: 144,
                    height: 139,
                    x: 0,
                    y: 0
                }
            },
        ]
    },
]


const sGrid = {
    gridTemplateColumns: 'repeat(13, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
}

export default function Design() {

    const [asset, setAsset] = useState(initialAssets[0])
    const elstage = useRef(null)

    return (
        <div style={sGrid} className='grid absolute w-full h-full left-0 right-0 '>
            <div className='col-[1/14] row-[1/2]'>
                <Navigator />
            </div>

            <div className='bg-pink-900 col-[1/14] row-[2/9] lg:col-[2/14] lg:row-[2/10] '>
                {/* <App /> */}
                <Preview elstage={elstage} asset={asset} setAsset={setAsset} />
            </div>

            <aside className='bg-blue-900 col-[1/14] row-[9/10] lg:col-[1/2] lg:row-[2/10] '>
                <Editor elstage={elstage} asset={asset} setAsset={setAsset} />
            </aside>
        </div>
    )

}
