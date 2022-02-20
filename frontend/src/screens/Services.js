import React from 'react'
import {Container} from "react-bootstrap"
import ServiceTable from '../components/ServiceTable'

const Services = () => {
  return (
    <Container>
      <h1 className="text-start" style={{margin:"15px"}}>
        <ServiceTable/>
      </h1>
    </Container>
  ) 
}

export default Services