'use client'

import { Stage, Layer, Rect, Circle, Image as KImage, Transformer } from 'react-konva';
import Image from 'next/image';
import stagebg from '~/assets/images/backdrop1.jpg'
import tshirt from '~/assets/images/tshirt/white/front.png'
import tshirtDesign from '~/assets/images/designs/lionblue.png'
import useImage from 'use-image';
import { useEffect, useRef, useState } from 'react';
import Viewer from '~/app/design/viewer';
import Editor from '~/app/design/editor';
import Navigator from '~/app/design/navigator';

const sGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(13, 1fr)',
  gridTemplateRows: 'repeat(9, 1fr)',
  width: '100%',
  height: '100%',
}
const sItem1 = {
  gridColumn: '1/21',
  gridRow: '1/2',
}
const sItem2 = {
  gridColumn: '1/3',
  gridRow: '2/11',
  backgroundColor: 'blue'
}
const sItem3 = {
  gridColumn: '3/11',
  gridRow: '2/11',

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
        <Viewer design={design} />
      </div>

      <aside className='bg-blue-900 col-[1/14] row-[9/10] lg:col-[1/2] lg:row-[2/10] '>
        <Editor onImageSelect={onImageSelect} />
      </aside>
    </div>

  )

 
}
