import React, {useEffect, useState} from "react";
import BotCard from "./BotCard";

function BotCollection({allBots, setAllBots, enlistedBots, setEnlistedBots}) {
  // Your code here
  let botList;

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then(result => result.json())
    .then(data => setAllBots(data))
  }, [])

  if(!allBots){
    botList = <h1>Loading...</h1>
  }else {
    botList = allBots.map(bot => <BotCard key={bot.id} bot={bot} enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots}/>)
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        {botList}
      </div>
    </div>
  );
}

export default BotCollection;
