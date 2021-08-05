import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Sidebar = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({ title: null, description: null });

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const validateForm = async (e) => {
    setErrors({ title: null, description: null });
    e.preventDefault();
    if (!title.trim().length) {
      setErrors((prevState) => ({
        ...prevState,
        title: "Title is empty.",
      }));

      return;
    }

    if (!description.trim().length) {
      setErrors((prevState) => ({
        ...prevState,
        description: "Description is empty.",
      }));

      return;
    }

    props.addCard({ title: title, description: description });
    setTitle("");
    setDescription("");
  };

  return (
    <aside className="sticky top-0 lg:h-screen p-5 space-y-5 flex flex-col justify-center">
      <h1 className="text-center text-3xl text-purple-800 font-bold lg:text-left">
        Notepad
      </h1>
      <form
        className="form space-y-5"
        onSubmit={(e) => {
          validateForm(e);
        }}
      >
        <div className="space-y-3">
          <input
            className="w-full rounded-lg shadow-md bg-gray-100 border-0 focus:border focus:border-purple-800 text-gray-800 ring-1 ring-gray-50 outline-none focus:ring-1 focus:ring-purple-800"
            type="text"
            name="name"
            placeholder="Title"
            onChange={(e) => {
              handleTitle(e);
            }}
            value={title}
          />

          {errors.title && (
            <p className="block text-xs text-red-600">{errors.title}</p>
          )}
        </div>
        <div>
          <textarea
            className="resize-none w-full rounded-lg shadow-md bg-gray-100 border-0 focus:border focus:border-purple-800 text-gray-800 ring-1 ring-gray-50 outline-none focus:ring-1 focus:ring-purple-800"
            type="text"
            name="description"
            placeholder="Description"
            rows="5"
            onChange={(e) => {
              handleDescription(e);
            }}
            value={description}
          />
          {errors.description && (
            <p className="block text-xs text-red-600">{errors.description}</p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-full lg:w-40 bg-yellow-600 px-5 py-2 rounded-lg text-white shadow-md font-bold uppercase hover:bg-yellow-700"
          >
            Create post-it
          </button>
        </div>
      </form>
      <div className="flex justify-center">
        <a href="https://github.com/ericbsantana/react-postit">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-purple-800 hover:text-purple-600"
            size={"2x"}
          />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
