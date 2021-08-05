import { useState, useEffect } from "react";

import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

import axios from "axios";

function App() {
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
      setData(data.filter((card) => card._id !== id));
      const response = await axios.delete("/delete", { data: { id: id } });
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  const addCard = async (data) => {
    try {
      const response = await axios.post("/create", data);
      setData((prevState) => [...prevState, response.data]);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPostIts();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="w-full lg:grid lg:grid-cols-9 lg:gap-5">
        <div className="w-full border-b border-yellow-300 lg:col-span-3 lg:border-r lg:border-yellow-300 ">
          <Sidebar fetchPostIts={fetchPostIts} addCard={addCard} />
        </div>
        <div className="grid grid-cols-1 lg:col-span-6">
          <Content
            fetchPostIts={fetchPostIts}
            deleteCard={deleteCard}
            data={data}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
