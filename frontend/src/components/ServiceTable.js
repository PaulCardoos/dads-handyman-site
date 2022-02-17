import React from 'react'
import ServiceColumnRow from './ServiceColumnRow'
import "../styles/service.css"
const ServiceTable = () => {
  return (
    <div className="container service_container">
        <ServiceColumnRow/>
        <ServiceColumnRow/>
        <ServiceColumnRow/>
        <ServiceColumnRow/>
        <ServiceColumnRow/>
        <ServiceColumnRow/>
        <ServiceColumnRow/>
        

    </div>

  )
}

export default ServiceTable