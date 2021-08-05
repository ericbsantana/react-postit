import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-9 gap-5">
        <div className="col-span-3 border-r border-yellow-300 ">
          <Sidebar />
        </div>
        <div className="col-span-6">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
