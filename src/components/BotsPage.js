import React, {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [enlistedBots, setEnlistedBots] = useState([])

  return (
    <div>
      <YourBotArmy />
      <BotCollection enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots}/>
    </div>
  )
}

export default BotsPage;
