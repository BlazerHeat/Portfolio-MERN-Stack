const mongoose = require("mongoose");

const ProposalSchema = new mongoose.Schema({
    companyName: String,
    budget: Number,
    projectName: String,
    projectDesc: String,
    companyEmail: String,
    contactNo: String
});

module.exports = mongoose.model("Proposals", ProposalSchema);
