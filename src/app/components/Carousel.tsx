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
  width: number
  height: number
}

//Image Array Object - Modify Image Here
const GALLERY: GalleryItem[] = [
  { source: `/1.png`, key: '1', alt: '1', width: 1920, height: 460 },
  { source: `/2.png`, key: '2', alt: '2', width: 1920, height: 460 },
  { source: `/3.png`, key: '3', alt: '3', width: 1920, height: 460 },
  { source: `/4.png`, key: '4', alt: '4', width: 1920, height: 460 }
]

const App: React.FC = () => (
  <div className='flex justify-center items-center'>
    <div className='container'>
      <Carousel autoplay className='mt-20 rounded-xl'>
        {GALLERY.map((item) => (
          <div key={item.key}>
            <Image
              className='carousel object-cover rounded-xl'
              src={item.source}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
)

export default App
