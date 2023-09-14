import PropTypes from "prop-types";

const SelectPlayer = ({ player, handleRemove }) => {
  const { name, price, img } = player;
  return (
    <div className="flex items-center justify-between text-slate-600 font-bold text-md border p-2 border-blue-300 rounded-md mb-2">
      <img src={img} alt="" className="w-12 h-12 rounded-full" />
      <h2>{name}</h2>
      <h2 className="text-rose-400">{price}$</h2>
      <button
        onClick={() => handleRemove(player)}
        className="btn btn-sm btn-outline btn-error"
      >
        X
      </button>
    </div>
  );
};

SelectPlayer.propTypes = {
  player: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default SelectPlayer;
