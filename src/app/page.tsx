import Image from 'next/image'
import { Heading } from '~/components/atoms/Heading'
import { Inter } from 'next/font/google'
import { featuresLargeData, heroProps, twoColumnImageTextData } from '~/data/data'
import { FeaturesLarge } from '~/components/sections/FeatursLarge'
import { TwoColumnImageText } from '~/components/sections/TwoColumnImageText'
import CTA from '~/components/atoms/CTA'


export default function Home() {
  return (
    <main >
      {/* <FeaturesLarge  {...featuresLargeData} /> */}
      <TwoColumnImageText {...twoColumnImageTextData} />
        {/* <h1 className="text-6xl font-bold text-gray-900 "> Sanjay Goswami</h1> */}
    </main>
  )
}

