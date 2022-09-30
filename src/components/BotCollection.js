import React, {useEffect, useState} from "react";
import BotCard from "./BotCard";

function BotCollection() {
  // Your code here
  const [data, setData] = useState(<h1>Loading...</h1>)

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then(result => result.json())
    .then(botList => {
      const bots = botList.map(bot => <BotCard bot={bot}/>)
      setData(bots)
    })
  }, [])


  return (
    <div className="ui four column grid">
      <div className="row">
        {data}
      </div>
    </div>
  );
}

export default BotCollection;
