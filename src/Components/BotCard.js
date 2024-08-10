import React from "react";

function BotCard({ bot, handleClick, buttonLabel, dischargeBot }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <h3>{bot.name}</h3>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
      <button onClick={() => handleClick(bot)}>{buttonLabel}</button>
      {dischargeBot && <button className="discharge-button" onClick={() => dischargeBot(bot)}>X</button>}
    </div>
  );
}

export default BotCard;
