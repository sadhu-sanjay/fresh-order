import Image from 'next/image'
import useImage from 'use-image';
import { useEffect, useRef, useState } from 'react'
import { Stage, Layer, Rect, Circle, Image as KImage, Transformer, Group } from 'react-konva';
import tshirt from '~/assets/images/tshirt/white/front.png'
import React from 'react';
import { KonvaEventObject } from 'konva/lib/Node';
import Rectangle from './shapes/Rectangle';
import MyImage from './shapes/my-image';


const initialRectangles = [
  {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    // fill: 'red',
    id: 'rect1',
  },
  {
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    // fill: 'green',
    id: 'rect2',
  },
];

function Viewer({ design }: { design: string }) {

  const [rectangles, setRectangles] = useState(initialRectangles);
  const [selectedId, selectShape] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  let [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (containerRef.current) {
      setSize({ width: containerRef.current.offsetHeight * 0.38, height: containerRef.current.offsetHeight * 0.36 })
    }
  }, [])

  const checkDeselect = (e: any) => {

    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }

  }

  return (
    <div ref={containerRef}
      className={`flex justify-center place-items-center relative w-full h-full bg-gradient-to-r from-sky-950 to-sky-900 stageBackground bg-contain bg-no-repeat bg-center `}
    >

      <Image className='absolute object-cover sm:object-contain'  alt='tshirt image on stage' src={tshirt.src} fill />
      <Stage
        width={size.width}
        height={size.height}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        className=' border-dotted border border-pink-900 z-10'
      >

        <Layer>
          {rectangles.map((rect, i) => {
            return (
              // <Group key={i}>
              // <Rectangle
              //   key={i}
              //   shapeProps={rect}
              //   isSelected={rect.id === selectedId}
              //   onSelect={() => {
              //     selectShape(rect.id)
              //   }}
              //   onChange={(newAttrs: any) => {
              //     const rects = rectangles.slice();
              //     rects[i] = newAttrs;
              //     setRectangles(rects);
              //   }}
              // />
              <MyImage
                design={design}
                key={i}
                shapeProps={rect}
                isSelected={rect.id === selectedId}
                onSelect={() => {
                  selectShape(rect.id)
                }}
                onChange={(newAttrs: any) => {
                  const rects = rectangles.slice();
                  rects[i] = newAttrs;
                  setRectangles(rects);
                }}
              />
              //  </Group> 
            )
          })}
        </Layer>
      </Stage>
    </div>
  )
}



export default Viewer
