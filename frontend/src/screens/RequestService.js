import React from 'react'
import FormContainer from '../components/FormContainer'
import RequestServiceForm from '../forms/RequestServiceForm'

const RequestService = () => {

  let title = "Request Service"

  //let text = `Fill out the form below to schedule an estimate for service from us at Alans Handy Man Service. From IKEA Furnature assembly to Kitchen Remodels and everything in between, we have you covered! Fill out the form below to get started with us today!
  //If this is not your first time with us and you are not looking for an estimate, still fill the form out to request service.`

  
  return (
    <FormContainer title={title}>
    
      <RequestServiceForm/>
    
    </FormContainer>
  )
}

export default RequestService