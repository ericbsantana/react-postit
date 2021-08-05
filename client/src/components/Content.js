import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Content = (props) => {
  return (
    <main className="p-5 space-y-5">
      <h1 className=" text-3xl text-purple-800 font-bold">Your notes</h1>
      <div className="space-y-5 lg:grid lg:grid-cols-6 lg:gap-5 lg:space-y-0">
        {!props.loading &&
          props.data.map((postit) => (
            <Card
              key={postit._id}
              id={postit._id}
              title={postit.title}
              description={postit.description}
              deleteCard={props.deleteCard}
            />
          ))}
        {props.loading && (
          <div className="w-full flex flex-col content-center items-center space-y-5 col-span-6 text-3xl font-bold text-purple-800">
            <p className="lg:text-2xl">Loading...</p>
            <FontAwesomeIcon icon={faCircleNotch} spin={true} />
          </div>
        )}
      </div>
    </main>
  );
};

export default Content;
