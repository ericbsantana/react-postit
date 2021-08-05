import Content from "./components/Card";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-9">
        <div className="col-span-3 border-r border-yellow-300 ">
          <Sidebar />
        </div>
        <div className="">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
