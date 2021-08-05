import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

axios.defaults.baseURL = "http://localhost:3001";

const Content = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPostIts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/fetch");
      setData(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCard = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete("/delete", { data: { id: id } });
      console.log(response);
      setLoading(false);
      fetchPostIts();
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchPostIts();
  }, []);

  return (
    <main className="p-5 space-y-5">
      <h1 className=" text-3xl text-purple-800 font-bold">Your notes</h1>
      <div className="grid grid-cols-6 gap-5">
        {!loading &&
          data.map((postit) => (
            <Card
              key={postit._id}
              id={postit._id}
              title={postit.title}
              description={postit.description}
              deleteCard={deleteCard}
            />
          ))}
      </div>
    </main>
  );
};

export default Content;
