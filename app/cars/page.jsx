import { Car } from 'lucide-react'
import React from 'react'
import CarList from '@/components/CarList'
import { CarData } from '../CarData'
const page = () => {
  return (
    <div className='bg-gray-100 min-h-screen py-20'>
      <CarList cars={CarData} vehicleName="cars"/>
    </div>
  )
}

export default page
