import { Car } from 'lucide-react'
import React from 'react'
import CarList from '@/components/CarList'
import { LuxuryBusesData } from '../luxuryBusesData'
const page = () => {
  return (
    <div className='bg-gray-100 min-h-screen py-20'>
      <CarList cars={LuxuryBusesData} vehicleName="Luxury-buses"/>
    </div>
  )
}

export default page
