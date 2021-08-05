const Postit = require("../models/Postit");

exports.GetPostits = async (req, res) => {
  const data = await Postit.find();

  return res.json(data);
};

exports.AddPostit = async (req, res) => {
  try {
    const data = await Postit.create({
      title: req.body.title,
      description: req.body.description,
    });
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

exports.DeletePostit = async (req, res) => {
  try {
    const data = await Postit.findByIdAndDelete(req.body.id);
    if (data) {
      return res.status(200).json({ message: "deleted sucessfully", data });
    } else {
      return res.status(500).json({ message: "error when deleting" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
