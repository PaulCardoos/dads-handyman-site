import React, {useContext} from 'react'
import ServiceColumnRow from './ServiceColumnRow'
import {ServiceContext, ServiceProvider} from "../context/Context"
import "../styles/service.css"
const ServiceTable = () => {

  const serviceCont = useContext(ServiceContext)

  return (
    <div className="container service_container">
        <ServiceColumnRow props={data}/>
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