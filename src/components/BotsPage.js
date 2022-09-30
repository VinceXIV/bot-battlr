import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { BotInformationProvider } from "./botInfo";

function BotsPage() {
  //start here with your code for step one

  return (
    <BotInformationProvider>
      <div>
        <YourBotArmy />
        <BotCollection />
      </div>
    </BotInformationProvider>
  )
}

export default BotsPage;
