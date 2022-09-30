import React from "react";
import BotCard from "./BotCard";


function YourBotArmy({enlistedBots, setEnlistedBots}) {
  //your bot army code here...
  const botList = enlistedBots.map(enlistedBot => <BotCard key={enlistedBot.id} bot={enlistedBot} enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots}/>)

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botList}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
