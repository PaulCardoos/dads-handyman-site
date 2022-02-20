import React from 'react'

const ServiceColumn = ({ children }) => {
  return (
    <div className="col-lg-3 col-xl-3 col-sm-12 col-md-12">
      {children}
    </div>
  )
}

export default ServiceColumn