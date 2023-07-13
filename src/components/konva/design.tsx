'use client'

import { Stage, Layer, Rect, Circle } from 'react-konva';
import { IconChevronRight, IconArrowLeftCircle } from '@tabler/icons-react';
import { Heading3 } from '../atoms/Heading3';
import Link from 'next/link';
import Image from 'next/image';
import stagebg from '~/assets/images/backdrop1.jpg'
import tshirt from '~/assets/images/tshirt/white/front.png'

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

      <div style={sGrid} className='absolute left-0 right-0 '>
        <div style={sItem1} >
          <div className='bg-white flex dark:bg-black w-full h-full'>
            <div className='flex gap-2 flex-row justify-start items-center p-4'>
              <Link href='/' className='shadow-sm rounded-lg p-1 m-1 '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"  className="w-6 h-6">
                  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                </svg>


              </Link>
              <Link href='/'>
                <Heading3 animate={false} text='Step1' />
              </Link>
              <IconChevronRight color='gray' className='w-6 ' />
              <Link href='/'>
                <Heading3 animate={false} text='Step2' />
              </Link>
              <IconChevronRight color='gray' className='w-6 ' />
              <Link href='/'>
                <Heading3 animate={false} text='Step3' />
              </Link >
            </div>
          </div>
        </div>

        <aside className='bg-blue-500 col-[1/11] row-[10/11] sm:col-[1/3] sm:row-[2/11] '>Div 3</aside>

        <div className='relative bg-yellow-500 col-[1/11] row-[2/10] sm:col-[3/11] sm:row-[2/11] '>
          <StageContainer />
        </div>

      </div>

    </>
  );
}


const StageContainer = () => {
  return (
    <div className=' w-full h-full'>
      <div className={`bg-gradient-to-r from-sky-950 to-sky-900 stageBackground bg-contain bg-no-repeat bg-center w-full h-full `}>
        <Image objectFit='cover' objectPosition='center' alt='tshirt image on stage' src={tshirt.src} fill />
        <Stage width={window.innerWidth * 0.7} height={window.innerHeight * 0.8}>
          <Layer>
            {/* <Rect width={500} height={500} fill="red" /> */}
            <Circle x={500} y={500} stroke="black" radius={50} />
          </Layer>
        </Stage>
      </div>
    </div>
  )
}
