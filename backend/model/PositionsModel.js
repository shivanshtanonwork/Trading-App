const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositonsSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };
