import React from 'react'
import { ServiceContext } from '../context/Context'
import "../styles/service.css"
import Painting from "../assets/painting.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ServiceColumnRow = ({name, photo}) => {
  console.log(photo)



  return (
    <div className="row service_column_row">
        <span className="service_row">
       {name}
        </span>
    </div>
  )
}

export default ServiceColumnRow