import Image from 'next/image'
import useImage from 'use-image';
import { useEffect, useRef, useState } from 'react'
import { Stage, Layer, Rect, Circle, Image as KImage, Transformer } from 'react-konva';
import tshirt from '~/assets/images/tshirt/white/front.png'


export default function ({ design }: { design: string }) {

  const ref = useRef(null)
  const imgShapeRef = useRef(null)
  const shapeRef = useRef(null)
  const trRef = useRef(null)

  const [size, setSize] = useState({ width: 0, height: 0 })
  const [isSelected, setIsSelected] = useState(false)
  const [selectedImage, setSelectedImage] = useImage('https://konvajs.org/assets/lion.png')

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
  }, [isSelected, selectedImage])


  const LionImage = () => {
    const [image] = useImage('https://konvajs.org/assets/lion.png');
    return <KImage ref={imgShapeRef} image={image} />;
  };

  const [designImage] = useImage(design)
// return (<div></div>)

  return (

    // Base Element
    // <div ref={ref} className={`grid place-items-center  bg-gradient-to-r from-sky-950 to-sky-900 stageBackground  w-full h-full `}>

      // <img className='object-center bg-no-repeat object-cover w-full h-auto sm:h-full sm:w-auto ' src={tshirt.src} alt='design' />
      <div className='w-full h-full bg-gradient-to-r from-sky-950 to-sky-900'>

      </div>



    // </div>

  )
}