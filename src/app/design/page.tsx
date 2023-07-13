'use client'
import dynamic from 'next/dynamic';

const Design = dynamic(() => import('~/components/konva/design'),{
    ssr: false
})


export default function Page(props: any) {
    return <Design />;
}