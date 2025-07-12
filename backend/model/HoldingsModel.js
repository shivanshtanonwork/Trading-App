const { model } = require("mongoose ");

const { HoldingSchema } = require("../schemas/HoldingSchema");

const HoldingsModel = new model("holding", HoldingSchema);

module.exports = { HoldingsModel };
