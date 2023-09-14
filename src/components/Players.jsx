import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Player from "./Player";

const Players = ({ handleSelection, remainingBalance, selection }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("./player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));

    // const getPlayers = async () => {
    //   const res = await fetch("./player.json");
    //   const data = await res.json();
    //   setPlayers(data);
    // };
    // getPlayers();
  }, []);
  return (
    <div className="col-span-9 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          handleSelection={handleSelection}
          remainingBalance={remainingBalance}
          selection={selection}
        />
      ))}
    </div>
  );
};

Players.propTypes = {
  handleSelection: PropTypes.func.isRequired,
  remainingBalance: PropTypes.number.isRequired,
};

export default Players;
