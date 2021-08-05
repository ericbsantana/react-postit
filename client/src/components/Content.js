import Card from "./Card";

const Content = (props) => {
  return (
    <main className="p-5 space-y-5">
      <h1 className=" text-3xl text-purple-800 font-bold">Your notes</h1>
      <div className="grid grid-cols-6 gap-5">
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
          <div className="w-full flex justify-center col-span-6 text-3xl font-bold text-purple-800">
            Loading...
          </div>
        )}
      </div>
    </main>
  );
};

export default Content;
