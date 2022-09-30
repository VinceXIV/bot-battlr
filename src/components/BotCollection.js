import React from "react";

function BotCollection({allBots}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {allBots}
      </div>
    </div>
  );
}

export default BotCollection;
