import { Car } from 'lucide-react'
import React from 'react'
import CarList from '@/components/CarList'
import { MiniBusesData } from '../MiniBusesData'
/*************  ✨ Codeium Command ⭐  *************/
/**
 * This function is a React component that renders a page displaying a list of mini-buses.
 * It utilizes the CarList component to display the data from CarData.
 */

/******  3c3e823b-294a-438c-9d2c-b018803bfd5d  *******/
const page = () => {
  return (
    <div className='bg-gray-100 min-h-screen py-20'>
      <CarList cars={MiniBusesData} vehicleName="mini-buses"/>
    </div>
  )
}

export default page
