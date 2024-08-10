import React, { useState, useEffect } from "react";
import BotCollection from "./Components/BotCollection";
import YourBotArmy from "./Components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots from the server
  useEffect(() => {
    fetch("https://bot-battlr-backend-rho.vercel.app/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  // Add bot to army
  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Remove bot from army
  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Delete bot from server and army
  const dischargeBot = (bot) => {
    fetch(`https://bot-battlr-backend-rho.vercel.app/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setArmy(army.filter((b) => b.id !== bot.id));
      setBots(bots.filter((b) => b.id !== bot.id));
    });
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <YourBotArmy
        bots={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default App;
