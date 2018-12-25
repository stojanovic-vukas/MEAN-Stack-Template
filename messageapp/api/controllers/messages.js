const mongoose = require("mongoose");
const message = mongoose.model("mysample");

module.exports.getMessages = function(req, res) {

    message.find(function(findError, messages) {

        if (findError) {

            return res.status(500).send(findError);

        } else if (messages == null) {

            return res.send("No messages found.");

        } else {

            return res.send(messages);

        }

    });

}