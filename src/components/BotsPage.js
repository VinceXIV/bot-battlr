import React, {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [enlistedBots, setEnlistedBots] = useState([])
  const [allBots, setAllBots] = useState([])

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots}/>
      <BotCollection allBots={allBots} setAllBots={setAllBots} enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots}/>
    </div>
  )
}

export default BotsPage;
