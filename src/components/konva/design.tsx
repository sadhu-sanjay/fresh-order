'use client'

import { Stage, Layer, Rect, Circle, Image as KImage, Transformer } from 'react-konva';
import { IconChevronRight, IconTextSize, IconTypography } from '@tabler/icons-react';
import { ArrowLeftCircleIcon, PhotoIcon } from '@heroicons/react/24/solid';
import { Heading3 } from '../atoms/Heading3';
import Link from 'next/link';
import Image from 'next/image';
import stagebg from '~/assets/images/backdrop1.jpg'
import tshirt from '~/assets/images/tshirt/white/front.png'
import tshirtDesign from '~/assets/images/designs/lionblue.png'
import useImage from 'use-image';
import { useEffect, useRef, useState } from 'react';
import AnimateUp from '../common/BaseAnimation';
import ToggleDarkMode from '../atoms/ToggleDarkMode';

const sGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(20, 1fr)',
  gridTemplateRows: 'repeat(20, 1fr)',
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

  const items = [1, 2, 3, 4].map((item, index) => {
    return (
      <div className='hover:bg-blue-600 hover:shadow-md hover:shadow-blue-900/50 hover:text-[white]
      text-[#424447] 
      transition-all duration-200 ease-in-out cursor-pointer 
      rounded-lg aspect-square flex flex-col justify-center items-center'>
        <label htmlFor='uploadImg' className='cursor-pointer flex flex-col items-center'>
          <PhotoIcon className='w-8 ' />
          Image
          <input id='uploadImg' type='file' hidden />
        </label>
      </div>
    )
  })

  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <>

      <div style={sGrid} className='absolute left-0 right-0 '>
        <div style={sItem1} className='col-[1/21] row-[1/2] '>
          <div className='bg-white flex dark:bg-black w-full h-20'>
            <div className='flex gap-2 flex-row justify-start items-center p-4'>
              <Link href='/' className=' p-2 '>
                <ArrowLeftCircleIcon color='gray' className='h-7' />
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

            <ToggleDarkMode />
          </div>
        </div>

        <div className='relative bg-yellow-500 col-[1/21] row-[2/20] lg:col-[2/21] lg:row-[2/21] '>
          <StageContainer />
        </div>

        <aside className='bg-white col-[1/21] row-[20/21] lg:col-[1/2] lg:row-[2/11] '>
          <div className='grid grid-cols-4 lg:grid-cols-1
          gap-3 md:gap-5 
          p-3 md:p-5 
          w-full h-auto'>
            {items}
            {/* <div>
              <IconTypography className='w-8' />
            </div> */}
          </div>
        </aside>

      </div>

    </>
  );
}


const StageContainer = () => {

  const ref = useRef(null)
  const imgShapeRef = useRef(null)
  const shapeRef = useRef(null)
  const trRef = useRef(null)

  const [size, setSize] = useState({ width: 0, height: 0 })
  const [isSelected, setIsSelected] = useState(false)

  const handleDragStart = (e: any) => {
    const id = e.target.id();
    console.log("Here", id)
  };

  useEffect(() => {
    if (ref.current) {
      setSize({ width: ref.current.offsetHeight * 0.36, height: ref.current.offsetHeight * 0.35 })
    }

    if (isSelected) {
      trRef.current!.nodes([shapeRef.current]);
      trRef.current!.getLayer().batchDraw();
    }


    console.log(size)
  }, [isSelected])

  const LionImage = () => {
    const [image] = useImage('https://konvajs.org/assets/lion.png');
    return <KImage ref={imgShapeRef} image={image} />;
  };

  const [designImage] = useImage(tshirtDesign.src)


  return (

    <div ref={ref} className={`bg-gradient-to-r from-sky-950 to-sky-900 stageBackground bg-contain bg-no-repeat bg-center w-full h-full `}>
      <Image objectFit='cover' objectPosition='center' alt='tshirt image on stage' src={tshirt.src} fill />
      <div className='flex w-full h-full bg-blue-800'>
        <Stage multiply={true} width={size.width} height={size.height} className='bg absolute top-[20%] left-[22%] md:left-[37%] '>
          <Layer>
            {/* <Rect onTap={() => setIsSelected(true)} onClick={() => setIsSelected(true)} ref={shapeRef} draggable width={100} height={100} fill="red" /> */}

            {/* <LionImage /> */}
            <KImage onTap={() => setIsSelected(true)} onClick={() => setIsSelected(true)} ref={shapeRef} draggable image={designImage} />
            {isSelected && (
              <Transformer
                ref={trRef}
                boundBoxFunc={(oldBox, newBox) => {
                  // limit resize
                  if (newBox.width < 5 || newBox.height < 5) {
                    return oldBox;
                  }
                  return newBox;
                }}
              />
            )}
            {/* <Circle draggable onDragStart={handleDragStart} x={0} y={0} stroke="black" radius={50} /> */}
          </Layer>
        </Stage>
      </div>

    </div>

  )
}
