import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div className="w-full px-4 py-5 lg:w-auto lg:col-span-2 lg:px-2 lg:py- xl:py-4 xl:px-8 bg-gray-100 shadow rounded-lg border-2 border-gray-100 break-words animate-fade-in-out">
      <div className="flex justify-between items-start border-b-2 border-dotted border-gray-400 mb-2 flex-grow-2">
        <h2 className="text-green-600 lg:text-sm xl:text-md font-semibold">
          {props.title}
        </h2>
        <button
          type="button"
          onClick={() => {
            props.deleteCard(props.id);
          }}
        >
          <FontAwesomeIcon
            className="text-purple-800 hover:text-purple-600"
            icon={faTimesCircle}
          />
        </button>
      </div>
      <span className="text-gray-600 md:text-sm">{props.description}</span>
    </div>
  );
};

export default Card;
