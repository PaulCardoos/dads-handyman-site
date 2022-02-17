import React, {useState} from "react"
import {services} from "../data/service.js"

export const ServiceContext = React.createContext({});

export const ServiceProvider = ({children}) => {
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
