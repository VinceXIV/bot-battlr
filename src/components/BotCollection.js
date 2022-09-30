import React, {useEffect, useContext} from "react";
import {botInfoContext} from './botInfo'
import BotCard from "./BotCard";

function BotCollection() {
  // Your code here  
  const {allBots, setAllBots} = useContext(botInfoContext)

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then(result => result.json())
    .then(botList => {
      const bots = botList.map(bot => <BotCard key={bot.id} bot={bot}/>)
      setAllBots(bots)
    })
  }, [])


  return (
    <div className="ui four column grid">
      <div className="row">
        {allBots}
      </div>
    </div>
  );
}

export default BotCollection;
