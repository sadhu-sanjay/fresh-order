
import useImage from 'use-image';
import { useEffect, useRef, useState } from 'react'
import { Stage, Layer, Rect, Circle, Image as KImage, Transformer, Group } from 'react-konva';
import Image from 'next/image'
import tshirt from '~/assets/images/tshirt/white/front.png'
import tshirtWhiteBack from '~/assets/images/tshirt/white/back.png'
import React from 'react';
import { KonvaEventObject } from 'konva/lib/Node';
import Rectangle from './shapes/Rectangle';
import MyImage from './shapes/my-image';
import { IconRotate } from '@tabler/icons-react';


export default function Preview({ asset, setAsset, elstage }: { asset: Asset, setAsset: any, elstage: any }) {

  const [selectedId, selectShape] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  let [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (containerRef.current) {
      setSize({ width: containerRef.current.offsetHeight * 0.36, height: containerRef.current.offsetHeight * 0.50 })
    }
  }, [])

  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  }
  const changeDirection = () => {
    const currentAsset = { ...asset }
    currentAsset.direction = asset.direction == 'front' ? 'back' : 'front'
    setAsset(currentAsset)
  }

  return (
    <div ref={containerRef}
      className={`flex justify-center place-items-center relative w-full h-full bg-gradient-to-r from-sky-950 to-sky-900 stageBackground bg-contain bg-no-repeat bg-center `}
    >
      <Image className={`absolute object-cover sm:object-contain `} alt='tshirt image on stage' src={`${asset.direction == 'front' ? tshirt.src : tshirtWhiteBack.src}`} fill />
      <button onClick={() => changeDirection()} type="button" className="absolute right-2 bottom-2 text-white 
      bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
      hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
      focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg 
      shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 
      font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 ">
        <IconRotate className="w-6" />
      </button>
      

      <Stage
        ref={elstage}
        width={size.width}
        height={size.height}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        className='z-10 relative right-1 border-dotted border border-pink-900 '
      >

        <Layer>
          <Group>
            {(asset[asset.direction] as Array<Design>).map((design: Design, index: number) => {
              return (
                <MyImage
                  design={design.preview}
                  key={index}
                  shapeProps={design.position}
                  isSelected={design.id === selectedId}
                  onSelect={() => {
                    selectShape(design.id)
                  }}
                  onChange={(newAttrs: any) => {

                    const copyCurrentAsset = { ...asset } as Asset
                    (copyCurrentAsset[asset.direction][index] as Design).position = newAttrs
                    setAsset(copyCurrentAsset)

                  }}
                />
              )
            })}
          </Group>
        </Layer>
      </Stage>
    </div>
  )
}




