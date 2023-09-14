import PropTypes from "prop-types";
import SelectPlayer from "./SelectPlayer";

const Selection = ({ selection, totalCost, handleRemove }) => {
  return (
    <div className="col-span-3">
      <h1 className="text-xl heading">
        Selection List
      </h1>
      <h1 className="text-md heading">
        Total Budget: 150000$
      </h1>
      <h1 className="text-md font-semibold text-slate-500 font-mono bg-blue-200 w-fit mx-auto px-4 py-1 rounded-md my-3">
        Total Cost: {totalCost}$
      </h1>
      <div className="px-4">
        {selection &&
          selection.map((player, index) => (
            <SelectPlayer
              key={index}
              player={player}
              handleRemove={handleRemove}
            />
          ))}
      </div>
    </div>
  );
};

Selection.propTypes = {
  selection: PropTypes.array.isRequired,
  totalCost: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Selection;
