import Image from 'next/image'
import { Heading } from '~/components/atoms/Heading'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main style={inter.style} className="flex min-h-screen flex-col items-center justify-between p-24">
        <Heading text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quam a? In hic assumenda ut dicta sunt quam atque. Maiores, ipsum. Cumque earum similique aliquam nihil. Similique quam excepturi optio."/>
        <Heading text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quam a? In hic assumenda ut dicta sunt quam atque. Maiores, ipsum. Cumque earum similique aliquam nihil. Similique quam excepturi optio."/>
        <Heading text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quam a? In hic assumenda ut dicta sunt quam atque. Maiores, ipsum. Cumque earum similique aliquam nihil. Similique quam excepturi optio."/>
        <Heading text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quam a? In hic assumenda ut dicta sunt quam atque. Maiores, ipsum. Cumque earum similique aliquam nihil. Similique quam excepturi optio."/>
        {/* <h1 className="text-6xl font-bold text-gray-900 "> Sanjay Goswami</h1> */}
    </main>
  )
}
