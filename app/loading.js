import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='absolute h-screen w-screen z-50 flex justify-center items-center'>
      {/* <Image src="/spinner.gif" className='w-full' width={500} height={500}></Image> */}
      <h2>Loading...</h2>
    </div>
  )
}

export default loading
