const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema(
  {
      token: {
      type: String
    }
  },
  { strict: false }
);

mongoose.model("Token", TokenSchema);
