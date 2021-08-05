const Sidebar = () => {
  return (
    <aside className="h-screen p-5 space-y-5 flex flex-col justify-center">
      <h1 className=" text-3xl text-purple-800 font-bold">Notepad</h1>
      <form className="form space-y-5">
        <div>
          <input
            className="w-full rounded-lg shadow-md bg-gray-100 border-0 focus:border focus:border-purple-800 text-gray-800 ring-1 ring-gray-50 outline-none focus:ring-1 focus:ring-purple-800"
            type="text"
            name="name"
            placeholder="Title"
          />
        </div>
        <div>
          <textarea
            className="resize-none w-full rounded-lg shadow-md bg-gray-100 border-0 focus:border focus:border-purple-800 text-gray-800 ring-1 ring-gray-50 outline-none focus:ring-1 focus:ring-purple-800"
            type="text"
            name="description"
            placeholder="Description"
            rows="5"
          />
        </div>
        <div className="ml-auto justify-end">
          <button
            type="submit"
            className="bg-yellow-600 px-5 py-2 rounded-lg text-white shadow-md font-bold uppercase hover:"
          >
            Create post-it
          </button>
        </div>
      </form>
    </aside>
  );
};

export default Sidebar;
