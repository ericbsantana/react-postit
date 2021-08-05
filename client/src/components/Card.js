const Card = (props) => {
  return (
    <div className="col-span-2 py-4 px-8 bg-gray-100 shadow rounded-lg border-2 border-gray-100 break-words">
      <div className="flex justify-between border-b-2 border-dotted border-gray-400 mb-2">
        <h2 className="text-green-600 text-md font-semibold">{props.title}</h2>
        <button
          type="button"
          onClick={() => {
            props.deleteCard(props.id);
          }}
        >
          X
        </button>
      </div>
      <span className="text-gray-600">{props.description}</span>
    </div>
  );
};

export default Card;
