const mongoose = require("mongoose");
const messageSchema = mongoose.Schema({

    path: String,
    description: String,
    details: String

});

messageSchema.index({'$**': 'text'});

mongoose.model("mysample", messageSchema);