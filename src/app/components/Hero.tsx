'use client'

//Import Components from ReactJs/NextJs
import React from 'react'
import Image from 'next/image'

//Import Components from Ant Designer
import { Carousel } from 'antd'

//Define Types
interface GalleryItem {
  source: string
  key: string
  alt: string
}

//Image Array Object - Modify Image Here
const GALLERY: GalleryItem[] = [
  { source: `/1.png`, key: '1', alt: '1' },
  { source: `/2.png`, key: '2', alt: '2' },
  { source: `/3.png`, key: '3', alt: '3' },
  { source: `/4.png`, key: '4', alt: '4' }
]

const Hero: React.FC = () => (
  <div className='flex justify-center items-center mt-20'>
    <div className='container'>
      <Carousel autoplay className='mt-10 '>
        {GALLERY.map((item) => (
          <div key={item.key} className='relative'>
            <Image
              className='carousel object-cover w-full max-w-full h-[460px]'
              src={item.source}
              alt={item.alt}
              width={1920}
              height={460}
            />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
)

export default Hero
