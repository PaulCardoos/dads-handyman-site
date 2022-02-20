import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../styles/reason.css"

const OneReason = ({ fontawesome, reason }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="custom col-3">
                    <FontAwesomeIcon style={{ height: "64px", width: "64px" }} icon={fontawesome} />
                </div>
                <div className="col-9 custom text-center">
                    <div className="row">
                        <span id="reason-text">
                            {reason}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneReason
