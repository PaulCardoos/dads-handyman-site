import React, {useState, createContext} from "react"
import {services} from "../data/service.js"

const ServiceContext = createContext({});

const ServiceProvider = ({children}) => {
    const [data, setServices] = useState(services)
    const [currentService, setCurrentService] = useState(services[0])

    const handleOnSelectService = (e) => {
        console.log(e.target.value)
        let target = e.target.value
        setCurrentService(target)
    }

    
    return( 
        <ServiceContext.Provider value={{data, currentService, handleOnSelectService}}>
            {children}
        </ServiceContext.Provider>
    );
};

export {ServiceContext, ServiceProvider}
