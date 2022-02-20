import React, {useState, createContext} from "react"
import {services} from "../data/service.js"

const ServiceContext = createContext({});

const ServiceProvider = ({children}) => {
    const [data] = useState(services)
    const [currentService, setCurrentService] = useState(data[0])

    const handleOnSelectService = (e) => {
        let target = e.target.innerText
        let current = data.filter((service) => service.service_name === target)
        setCurrentService(current[0])
    }

    return( 
        <ServiceContext.Provider value={{data, currentService, handleOnSelectService}}>
            {children}
        </ServiceContext.Provider>
    );
};

export {ServiceContext, ServiceProvider}
