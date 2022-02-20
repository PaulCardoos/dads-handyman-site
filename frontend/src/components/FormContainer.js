import React from 'react'

const FormContainer = ({ title, description, children }) => {
    return (
        <div className="container">
            <div className="row">
                    <h1 className="text-center">
                        {title}
                    </h1>
                    <p className="text-start lead">
                        {description}
                    </p>
                <div className="col">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default FormContainer