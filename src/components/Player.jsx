import PropTypes from "prop-types";

const Player = ({ player, handleSelection, remainingBalance, selection }) => {
  const {
    name,
    price,
    description,
    total_matches,
    strike_rate,
    odi_100,
    odi_50,
    specialty,
    img,
  } = player;
  const selectedName = selection.map((player) => player.name);
  return (
    <div className="card bg-base-100 shadow-md p-5">
      <div className="flex gap-4 items-center">
        <figure className="flex-shrink-0 h-20 w-20 rounded-full border-2 border-blue-400">
          <img
            src={img}
            alt={name + " image"}
            className="rounded-full h-full w-full object-cover"
          />
        </figure>
        <div className="">
          <h3 className="text-lg font-bold text-slate-600">{name}</h3>
          <h4 className="text-sm font-medium text-slate-500">{specialty}</h4>
          <h4 className="text-sm font-black text-slate-700 bg-blue-100 w-fit px-2 py-1 rounded-md mt-2">
            Price: {price}$
          </h4>
        </div>
      </div>
      <div className="card-body items-center text-center px-0">
        <p className="font-medium text-slate-600">{description}</p>
        <table className="border-collapse border border-slate-200">
          <tbody>
            <tr>
              <td className="table-data">Total Match</td>
              <td className="table-data">{total_matches}</td>
            </tr>
            <tr>
              <td className="table-data">Total Hundred</td>
              <td className="table-data">{odi_100}</td>
            </tr>
            <tr>
              <td className="table-data">Total Fifty</td>
              <td className="table-data">{odi_50}</td>
            </tr>
            <tr>
              <td className="table-data">Strike Rate</td>
              <td className="table-data">{strike_rate}</td>
            </tr>
          </tbody>
        </table>
        <div className="card-actions mt-3">
          <button
            disabled={remainingBalance < price || selectedName.includes(name)}
            onClick={() => handleSelection(player)}
            className="btn bg-blue-100"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  handleSelection: PropTypes.func.isRequired,
  remainingBalance: PropTypes.number.isRequired,
  selection: PropTypes.array.isRequired,
};
export default Player;
