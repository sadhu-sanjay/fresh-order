import Image from 'next/image'
import { Heading } from '~/components/atoms/Heading'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main style={inter.style} className="flex min-h-screen flex-col items-center justify-between p-24">
        <Heading text="Hello, I'm Sanjay Goswami" />
        {/* <h1 className="text-6xl font-bold text-gray-900 "> Sanjay Goswami</h1> */}
    </main>
  )
}
