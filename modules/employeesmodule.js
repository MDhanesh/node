const mongo = require("../connect");
const { ObjectId } = require("mongodb");
module.exports.getEmployees = async (req, res, next) => {
  try {
    const employeedata = await mongo.selectedDB
      .collection("employees")
      .find()
      .toArray();
    res.send(employeedata);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};
module.exports.updateEmployees = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = await mongo.selectedDB
      .collection("employees")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { ...req.body } },
        { returnDocument: "after" }
      );
    res.send(updatedData);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};
module.exports.createEmployees = async (req, res, next) => {
  try {
    const insertedRseponse = await mongo.selectedDB
      .collection("employees")
      .insert(req.body);
    res.send(insertedRseponse);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};
module.exports.deleteEmployees = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedData = await mongo.selectedDB
      .collection("employees")
      .remove({ _id: ObjectId(id) });
    res.send(deletedData);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};
