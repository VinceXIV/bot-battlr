import React, {useContext} from "react";
import BotCard from "./BotCard";
import {botInfoContext} from './botInfo'

function YourBotArmy() {
  //your bot army code here...
  const {enlistedBots} = useContext(botInfoContext)

  const bots = enlistedBots.map(enlistedBot => <BotCard key={enlistedBot.id} bot={enlistedBot}/>)


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
