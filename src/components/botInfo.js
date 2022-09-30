import React, {createContext, useState} from 'react'

const botInfoContext = React.createContext()

function BotInformationProvider({children}){
    const [allBots, setAllBots] = useState([])
    const [enlistedBots, setEnlistedBots] = useState([])

    return (
        <botInfoContext.Provider value={{allBots, setAllBots, enlistedBots, setEnlistedBots}}>
            {children}
        </botInfoContext.Provider>
    )
}

export {botInfoContext, BotInformationProvider}