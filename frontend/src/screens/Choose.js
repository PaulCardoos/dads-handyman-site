import React from 'react'
import Reason from "../components/Reason.js"
import "../styles/reason.css"

const Choose = () => {
    return (
        <div>
            <div className="container">
                <div className="col">
                    <h1 className="text-center mt-3">
                        Why Choose Us
                    </h1>
                    <div className="row mt-5">
                        <Reason />
                    </div>
                    <div className="row">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose
