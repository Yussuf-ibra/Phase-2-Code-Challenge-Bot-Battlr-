import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={releaseBot}
            buttonLabel="Release"
            dischargeBot={dischargeBot}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
