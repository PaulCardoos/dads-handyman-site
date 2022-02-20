import React from 'react'
import OneReason from "./OneReason.js"
import { reasons } from "../data/reasons.js"
const Reason = () => {
  return (
    <div className="container">
      <div className="row">
        {reasons.map((r) => (
          <div className="col-lg-6 col-xl-6 col-sm-12 col-md-12">
            <OneReason fontawesome={r.reason_icon} reason={r.reason_why} />
          </div>

        ))}
      </div>
    </div>
  )
}

export default Reason