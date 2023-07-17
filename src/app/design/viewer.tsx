import Image from 'next/image'
import useImage from 'use-image';
import { useEffect, useRef, useState } from 'react'
import { Stage, Layer, Rect, Circle, Image as KImage, Transformer } from 'react-konva';
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
    fill: 'red',
    id: 'rect1',
  },
  {
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    fill: 'green',
    id: 'rect2',
  },
];

function Viewer({design: string}: {design: string | null | undefined;}) {
  const [rectangles, setRectangles] = useState(initialRectangles);
  const [selectedId, selectShape] = useState<string | null>(null);

  const checkDeselect = (e: any) => {
    // if (!eve.target.getStage()) {
    //   selectShape(null);
    // }
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  }

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}>

      <Layer>
        {rectangles.map((rect, i) => {
          return (
            <>
            <Rectangle
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
            <MyImage
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
           </> 
          )
        })}
      </Layer>
    </Stage>
  )
}



export default Viewer
