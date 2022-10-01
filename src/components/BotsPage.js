import React, {useEffect, useRef, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotCard from "./BotCard"
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";

function BotsPage() {
  //start here with your code for step one
  const [allBots, setAllBots] = useState([])
  const [enlistedBots, setEnlistedBots] = useState([])
  const [botSpecs, setBotSpecs] = useState(null)
  const [showSortBar, setShowSortBar] = useState(true)
  const sortStrategy = useRef({ health: 1, damage: 1, armor: 1 })


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
        setShowSortBar(true)
        break;
        
      case "show-bot-specs":
        setBotSpecs(bot)
        setShowSortBar(false)
    }
  }


  function getBotList(botsArray){
    return botsArray.map(bot => <BotCard key={bot.id} bot={bot} handleBotAction={handleBotAction}/>)
  }


  function sortBots(data, sortBy){
    data.sort((a, b) => {
      if(a[sortBy] > b[sortBy]){
        return sortStrategy.current[sortBy] * 1
      }else if(a[sortBy] < b[sortBy]){
        return sortStrategy.current[sortBy] * -1
      } else {
        return 0
      }
    })

    return data
  }


  function updateSortStrategy(sortBy){
    sortStrategy.current[sortBy] *= -1 //if it was ascending, make it descending and vice versa
  }

  
  function handleSortAction(sortBy){
    updateSortStrategy(sortBy)
    setAllBots(sortBots([...allBots], sortBy))
  }

  return (
    <div>
      <YourBotArmy enlistedBots={getBotList(enlistedBots)}/>
      {showSortBar ? <SortBar handleSortAction={handleSortAction}/> : <div></div>}
      {botSpecs ? <BotSpecs bot={botSpecs} handleBotAction={handleBotAction} /> : <BotCollection allBots={getBotList(allBots)}/>}
    </div>
  )
}

export default BotsPage;
