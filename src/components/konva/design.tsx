'use client'

import { Stage, Layer, Rect, Circle } from 'react-konva';
import { IconChevronRight } from '@tabler/icons-react';
import { Heading3 } from '../atoms/Heading3';
import Link from 'next/link';

const sGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)',
  width: '100%',
  height: '100%',
}
const sItem1 = {
  gridColumn: '1/11',
  gridRow: '1/2',
  backgroundColor: 'red',
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
  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect width={500} height={500} fill="red" />
          <Circle x={500} y={500} stroke="black" radius={50} />
        </Layer>
      </Stage>

      <div style={sGrid} className='absolute left-0 right-0 '>
        <div style={sItem1} >
          <div className='bg-white flex dark:bg-black w-full h-full'>
            <div className='flex gap-2 flex-row justify-start items-center p-4'>
              <Link href='/'>
                <Heading3 text='Step1' />
              </Link>
              <IconChevronRight color='gray' className='w-6 ' />
              <Link href='/'>
                <Heading3 text='Step2' />
              </Link>
              <IconChevronRight color='gray' className='w-6 ' />
              <Link href='/'>
                <Heading3 text='Step3' />
              </Link >
            </div>
          </div>
        </div>

        <aside style={sItem2}>Div 3</aside>

        <div style={sItem3} >
          Item 1
        </div>

      </div>

    </>
  );
}
