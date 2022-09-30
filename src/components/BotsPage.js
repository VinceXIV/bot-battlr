import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotCard from "./BotCard"
import BotSpecs from "./BotSpecs";

function BotsPage() {
  //start here with your code for step one
  const [allBots, setAllBots] = useState([])
  const [enlistedBots, setEnlistedBots] = useState([])
  const [botSpecs, setBotSpecs] = useState(null)

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then(result => result.json())
    .then(data => setAllBots(data))
  }, [])


  function botAlreadyEnlisted(bot){
    return Boolean(enlistedBots.find(enlistedBot => enlistedBot.id === bot.id))
  }


  function removeBotFromDatabase(botToDelete){
    fetch(`http://localhost:8002/bots/${botToDelete.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => result.json())
    .then(() => {
      setAllBots(allBots.filter(currentBot => currentBot.id !== botToDelete.id))
      setEnlistedBots(enlistedBots.filter(enlistedBot => enlistedBot.id !== botToDelete.id))
    })
  }


  function handleBotAction(bot, action){
    switch(action){
      case "release-bot":
        removeBotFromDatabase(bot)   
        break;

      case "enlist-bot":
        if(!botAlreadyEnlisted(bot)){
          setEnlistedBots([...enlistedBots, bot])
        }else {
          alert(`${bot.name} has already been enlisted`)
        }
        break;
        
      case "show-all-bots":
        setBotSpecs(null)
        break;
        
      case "show-bot-specs":
        setBotSpecs(bot)
    }
  }


  function getBotList(botsArray){
    return botsArray.map(bot => <BotCard key={bot.id} bot={bot} handleBotAction={handleBotAction}/>)
  }


  return (
    <div>
      <YourBotArmy enlistedBots={getBotList(enlistedBots)}/>
      {botSpecs ? <BotSpecs bot={botSpecs} handleBotAction={handleBotAction} /> : <BotCollection allBots={getBotList(allBots)}/>}
    </div>
  )
}

export default BotsPage;
