import React from 'react'
import { Button, Row, Container, Col } from "react-bootstrap"

const RequestServiceForm = () => {
  return (
    <form>
      <Container>
        <Col>
          <Row>
            <Col sm={12} md={12} lg={6} xl={6}>
              <div className="mb-3">
                <label className="form-label" for="inputEmail">First Name</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
              </div>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
              <div className="mb-3">
                <label className="form-label" for="inputPassword">Last Name</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={6} xl={6}>
              <div className="mb-3">
                <label className="form-label" for="primaryPhoneNumber">Primary Phone</label>
                <input type="tel" className="form-control" id="primaryPhoneNumber" placeholder="781-925-5822" />
              </div>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
              <div className="mb-3">
                <label className="form-label" for="secondaryPhoneNumber">Secondary Phone</label>
                <input type="password" className="form-control" id="secondaryPhoneNumber" placeholder="781-333-8888" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <div className="mb-3">
                <label className="form-label" for="primaryEmailAddress">Email Address</label>
                <input type="email" className="form-control" id="primaryEmailAddress" placeholder="@" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12} xl={12}>
              <div className="mb-3">
                <label className="form-label" for="secondaryPhoneNumber">Description of Work Needed</label>
                <textarea className="form-control" placeholder="Please write a description of what you would like us to accomplish" style={{ height: "200px" }} id="floatingTextarea"></textarea>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={3} xl={3}>
              <div className="mb-3">
                <label className="form-label" for="primaryDate">Primary Date</label>
                <input type="date" className="form-control" id="primaryDate" />
              </div>
            </Col>
            <Col sm={12} md={12} lg={3} xl={3}>
              <div className="mb-3">
                <label className="form-label" for="primaryTime">Prefered Time</label>
                <input type="time" className="form-control" id="primaryDate" />
              </div>
            </Col>
            <Col sm={12} md={12} lg={3} xl={3}>
              <div className="mb-3">
                <label className="form-label" for="alternativeDate">Primary Date</label>
                <input type="date" className="form-control" id="alternativeDate" />
              </div>
            </Col>
            <Col sm={12} md={12} lg={3} xl={3}>
              <div className="mb-3">
                <label className="form-label" for="alernativeTime">Alternative Time</label>
                <input type="time" className="form-control" id="secondaryDate" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={6} xl={6}>
              <div className="mb-3">
                <label className="form-label" for="preferredContact">Preferred Communication</label>
                <select className="form-select" aria-label="Default select example">
                  <option selected value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="text">Text</option>
                </select>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
              <div className='mb-3'>
                <label className="form-label" for="isNewCustomer">First Time With Us?</label>
                <select className="form-select" aria-label="Default select example">
                  <option selected value="Y">Yes</option>
                  <option value="N">No</option>
                </select>
              </div>
            </Col>
            <Row>
              <Col>
                <div className="mb-3">
                  <Button variant="success" size="lg" type="submit">
                    Submit Request
                  </Button>
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
      </Container >
    </form >
  )
}

export default RequestServiceForm