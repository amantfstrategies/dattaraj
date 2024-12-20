import { Car } from 'lucide-react'
import React from 'react'
import CarList from '@/components/CarList'
import { CarData } from '../TaxiData'
const page = () => {
  return (
    <div>
      <CarList cars={CarData}/>
    </div>
  )
}

export default page
