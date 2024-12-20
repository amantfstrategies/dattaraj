import { Car } from 'lucide-react'
import React from 'react'
import CarList from '@/components/CarList'
import { CarData } from '../CarData'
const page = () => {
  return (
    <div>
      <CarList cars={CarData} vehicleName="cars"/>
    </div>
  )
}

export default page
