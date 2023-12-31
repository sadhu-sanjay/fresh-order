import { Rect, Circle, Image as KImage, Transformer } from 'react-konva';
import { use, useEffect, useRef, useState } from 'react'
import { KonvaEventObject } from 'konva/lib/Node';
import useImage from 'use-image';
import waterPark from '~/assets/images/designs/water_park@0.5x.png'
import React from 'react';
import Konva from 'konva';

const MyImage = ({ shapeProps, isSelected, onSelect, onChange, design }:
    { shapeProps: any, isSelected: boolean, onSelect: any, onChange: any,
    design: string }) => {
  
    const shapeRef = useRef(null)
    const trRef = React.useRef<Konva.Transformer>(null);
    const [image, setImage] = useImage(waterPark.src)
    // let designImage = useImage(design)
    var [designImage] = useImage(design)
  
    useEffect(() => {

      if (isSelected && trRef && trRef.current && shapeRef.current) {
        // we need to attach transformer manually

        trRef.current.nodes([shapeRef.current]);
        trRef.current.getLayer()?.batchDraw();
      }

    }, [isSelected])
  
    return (
      <>
        <KImage
        image={designImage}
          onclick={onSelect}
          onTap={onSelect}
          ref={shapeRef}
          {...shapeProps}
          draggable
          onDragEnd={(e: KonvaEventObject<DragEvent>) => {
            onChange({
              ...shapeProps,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
          onTransformEnd={(e: KonvaEventObject<Event>) => {
            // transformer is changing scale of the node
            // and NOT its width or height
            // but in the store we have only width and height
            // to match the data better we will reset scale on transform end
            const node = shapeRef.current as any
            const scaleX = node.scaleX()
            const scaleY = node.scaleY()
  
            // we will reset it back
            node.scaleX(1)
            node.scaleY(1)
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
              // set minimal value
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(node.height() * scaleY),
            })
          }}
        />
        {isSelected && (
          <Transformer
            ref={trRef}
            // limit the resizing option so it does not decrease very less.
            boundBoxFunc={(oldBox, newBox) => {
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox;
              }
              return newBox;
            }}
          />
        )}
      </>
    )
  }

  export default MyImage;