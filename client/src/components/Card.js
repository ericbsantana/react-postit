import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div className="w-auto col-span-2 py-4 px-8 bg-gray-100 shadow rounded-lg border-2 border-gray-100 break-words">
      <div className="flex justify-between items-start border-b-2 border-dotted border-gray-400 mb-2 flex-grow-2">
        <h2 className="text-green-600 text-md font-semibold">{props.title}</h2>
        <button
          type="button"
          onClick={() => {
            props.deleteCard(props.id);
          }}
        >
          <FontAwesomeIcon
            className="text-purple-500 hover:text-purple-800"
            icon={faTimesCircle}
          />
        </button>
      </div>
      <span className="text-gray-600">{props.description}</span>
    </div>
  );
};

export default Card;
