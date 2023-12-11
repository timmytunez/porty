import React from 'react'
import { ServiceCard } from '../components'

const ServiceCount = () => {
  return (
    <div className="w-full py-6 lg:py-24 mt-24 flex items-center justify-center flex-wrap gap-4">
      <ServiceCard count={"1M+"} text={"Happy Sunday"}/>
      <ServiceCard count={"1M+"} text={"Happy Customers"}/>
      <ServiceCard count={"1M+"} text={"Full-stack Projects"}/>
      <ServiceCard count={"1M+"} text={"Public Projects"}/>
    </div>
  )
}

export default ServiceCount