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

  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <>

      <div style={sGrid} className='absolute left-0 right-0 '>
        <div className='col-[1/14] row-[1/2]'>
          
        </div>

        <div className='relative bg-yellow-500 col-[1/21] row-[2/20] lg:col-[2/14] lg:row-[2/10] '>
          {/* <StageContainer /> */}
        </div>
        


      </div>

    </>
  );
}


// const StageContainer = () => {

//   const ref = useRef(null)
//   const imgShapeRef = useRef(null)
//   const shapeRef = useRef(null)
//   const trRef = useRef(null)

//   const [size, setSize] = useState({ width: 0, height: 0 })
//   const [isSelected, setIsSelected] = useState(false)
//   const [selectedImage, setSelectedImage] = useImage('https://konvajs.org/assets/lion.png')

//   const handleDragStart = (e: any) => {
//     const id = e.target.id();
//     console.log("Here", id)
//   };

//   useEffect(() => {

//     if (ref.current) {
//       setSize({ width: ref.current.offsetHeight * 0.36, height: ref.current.offsetHeight * 0.35 })
//     }

//     if (isSelected) {
//       trRef.current!.nodes([shapeRef.current]);
//       trRef.current!.getLayer().batchDraw();
//     }

//     console.log(size)
//   }, [isSelected, selectedImage])


//   const LionImage = () => {
//     const [image] = useImage('https://konvajs.org/assets/lion.png');
//     return <KImage ref={imgShapeRef} image={image} />;
//   };

//   const [designImage] = useImage(tshirtDesign.src)

//   return (

//     <div ref={ref} className={`bg-gradient-to-r from-sky-950 to-sky-900 stageBackground bg-contain bg-no-repeat bg-center w-full h-full `}>
//       <Image objectFit='cover' objectPosition='center' alt='tshirt image on stage' src={tshirt.src} fill />
//       <div className='flex w-full h-full bg-blue-800'>
//         <Stage multiply={true} width={size.width} height={size.height} className='border-dotted border border-secondary-700 absolute top-[20%] left-[22%] md:left-[37%] '>
//           <Layer>
//             {/* <Rect onTap={() => setIsSelected(true)} onClick={() => setIsSelected(true)} ref={shapeRef} draggable width={100} height={100} fill="red" /> */}

//             {/* <LionImage /> */}
//             <KImage image={selectedImage} />
//             <KImage onTap={() => setIsSelected(true)} onClick={() => setIsSelected(true)} ref={shapeRef} draggable image={designImage} />
//             {isSelected && (
//               <Transformer
//                 ref={trRef}
//                 boundBoxFunc={(oldBox, newBox) => {
//                   // limit resize
//                   if (newBox.width < 5 || newBox.height < 5) {
//                     return oldBox;
//                   }
//                   return newBox;
//                 }}
//               />
//             )}
//             {/* <Circle draggable onDragStart={handleDragStart} x={0} y={0} stroke="black" radius={50} /> */}
//           </Layer>
//         </Stage>
//       </div>

//     </div>

//   )
// }
