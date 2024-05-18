import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Game = mongoose.model("Game", gameSchema);

export { Game };
