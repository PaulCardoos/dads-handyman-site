import React from 'react'
import ServiceColumnRow from './ServiceColumnRow'

const ServiceColumn = ( {children} ) => {
  return (
  
        <div className="col-lg-4 col-xl-4 col-sm-12 col-md-12">
            {children}
        </div>
    
  )
}

export default ServiceColumn