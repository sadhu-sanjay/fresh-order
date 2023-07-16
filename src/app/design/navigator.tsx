import { IconChevronRight, IconTextSize, IconTypography } from '@tabler/icons-react';
import { ArrowLeftCircleIcon, PhotoIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import ToggleDarkMode from '~/components/atoms/ToggleDarkMode';

export default function Navigator() {
    return (
        <div className='bg-white w-full h-full flex flex-row'>
            <div className='flex gap-2 flex-row justify-start items-center p-4'>
              <Link href='/' className=' p-2 '>
                <ArrowLeftCircleIcon color='gray' className='h-7' />
              </Link>
              <Link href='/'>
                <div className='text-sm'>Step1</div>
              </Link>
              <IconChevronRight color='gray' className='w-6 ' />
              <Link href='/'>
                <div className='text-sm'>Step2</div>
              </Link>
              <IconChevronRight color='gray' className='w-6 ' />
              <Link href='/'>
                <div className='text-sm'>Step3</div>
              </Link >
            </div>

            <ToggleDarkMode />
          </div>
    )
}
