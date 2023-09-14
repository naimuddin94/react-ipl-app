import { useState } from "react";
import Players from "./components/Players";
import Selection from "./components/Selection";

function App() {
  const [selection, setSelection] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [remainingBalance, setRemainingBalance] = useState(150000);
  console.log(selection);

  const handleSelection = (player) => {
    const findPlayer = selection.find(
      (selectPlayer) => selectPlayer.id === player.id
    );
    if (findPlayer) {
      return alert("Player all ready selected. Please select another player");
    } else {
      if (player.price > remainingBalance) {
        return alert("You cross your budget");
      } else {
        setTotalCost(totalCost + player.price);
        setRemainingBalance(remainingBalance - player.price);
        setSelection([...selection, player]);
      }
    }
  };

  const handleRemove = (player) => {
    const newSelection = selection.filter((p) => p.id !== player.id);
    setSelection(newSelection);
    setTotalCost(totalCost - player.price);
    setRemainingBalance(remainingBalance + player.price);
  };

  return (
    <>
      <h1 className="text-3xl heading">IPL Dashboard</h1>
      <div className="lg:grid grid-cols-12 px-5 md:px-8">
        <Players
          handleSelection={handleSelection}
          remainingBalance={remainingBalance}
          selection={selection}
        />
        <Selection
          selection={selection}
          totalCost={totalCost}
          handleRemove={handleRemove}
        />
      </div>
    </>
  );
}

export default App;
