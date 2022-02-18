import React, {useContext, useEffect, useState} from 'react'
import ServiceColumnRow from './ServiceColumnRow'
import ServiceColumn from './ServiceColumn'
import {ServiceContext} from "../context/Context.js"
import "../styles/service.css"
const ServiceTable = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const {data} = useContext(ServiceContext)

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth)
  })

  useEffect(() => {

  }, [width])
 

  return (
   
    <div className="container service_container">
      <div className='row'>
     <ServiceColumn>
       {data.map((service) => (
         <ServiceColumnRow key={service.service_name} photo={service.service_img} name={service.service_name}/>
       ))}
     </ServiceColumn>
     {width > 1060 && <div className="col-xl-8 col-sm-12 col-md-12 col-lg-8">
          HAY


        </div>}
      </div> 
    </div>

  )
}

export default ServiceTable