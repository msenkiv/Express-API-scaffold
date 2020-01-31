const mongoose = require("mongoose");

const CallbackSchema = new mongoose.Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String
    }
  },
  { strict: false }
);

mongoose.model("Callback", CallbackSchema);
