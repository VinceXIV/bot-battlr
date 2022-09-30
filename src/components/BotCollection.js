import React, {useEffect, useState} from "react";
import BotCard from "./BotCard";

function BotCollection() {
  // Your code here
  const [allBots, setAllBots] = useState(<h1>Loading...</h1>)
  const [enlistedBots, setEnlistedBots] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then(result => result.json())
    .then(botList => {
      const bots = botList.map(bot => <BotCard bot={bot}/>)
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
