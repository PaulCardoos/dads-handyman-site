import React, {useContext} from 'react'
import { ServiceContext } from '../context/Context'
import "../styles/service.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const ServiceColumnRow = ({name, photo}) => {
  const {handleOnSelectService} = useContext(ServiceContext)
  return (
    <div className="row service_column_row">
        <span onClick={(e) => handleOnSelectService(e)} className="service_row">
        <FontAwesomeIcon icon={faCoffee}/>
        {name}
        </span>
    </div>
  )
}

export default ServiceColumnRow