import React, { useContext } from 'react'
import { ServiceContext } from "../context/Context.js"
import "../styles/service.css"

const ServiceInformation = () => {

  const { currentService } = useContext(ServiceContext)

  return (
    <div className="container">
      <h1 className="text-center">
        {currentService.service_name}
      </h1>
      <div className="row">
        {currentService.service_desc.map((service) => (
          <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
            <li className="text-center">
              {service}
            </li>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceInformation