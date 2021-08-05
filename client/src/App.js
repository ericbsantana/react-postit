import { useState, useEffect } from "react";

import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

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
    <div className="container mx-auto">
      <div className="grid grid-cols-9 gap-5">
        <div className="col-span-3 border-r border-yellow-300 ">
          <Sidebar fetchPostIts={fetchPostIts} />
        </div>
        <div className="col-span-6">
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
