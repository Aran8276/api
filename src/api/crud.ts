import express from "express";
import { Game } from "../models/game.modal";

const router = express.Router();
interface DataType {
  data?: any;
  error?: any;
}

type GameSchemaType = {
  name: string;
  price: number;
};

// Get all list of games
router.get<{}, DataType>("/", async (req, res) => {
  try {
    const data: any = await Game.find({});
    console.log("Data Fetching Success");
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500);
    res.json({ error: error.message });
    console.log(error);
  }
});

// Store a data of a game
router.post<{}, DataType>("/", async (req, res) => {
  try {
    const data: any = await Game.create(req.body);
    console.log("Data Created");
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500);
    res.json({ error: error.message });
    console.log(error);
  }
});

// Find a game through an id
router.get<{}, DataType>("/:id", async (req: any, res) => {
  try {
    const data: any = await Game.findById(req.params.id);
    console.log("Data Found By ID");
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500);
    res.json({ error: error.message });
    console.log(error);
  }
});

// Update a game through an id
router.put<{}, DataType>("/:id", async (req: any, res) => {
  try {
    const data: any = await Game.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    console.log("Data Update Success");
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500);
    res.json({ error: error.message });
    console.log(error);
  }
});

// Delete a game through an id
router.delete<{}, DataType>("/:id", async (req: any, res) => {
  try {
    const data = await Game.findByIdAndDelete(req.params.id);
    console.log("Data Deleted");
    res.status(200).json({
      data: `Successfully deleted: ${req.params.id}`,
    });
  } catch (error: any) {
    res.status(500);
    res.json({ error: error.message });
    console.log(error);
  }
});

// Find a game through a query
router.get<{}, DataType>("/search/:query", async (req: any, res) => {
  try {
    console.log(req.params.query);
    const data: any = await Game.find({
      name: { $regex: new RegExp(req.params.query, "i") },
    });
    console.log("Data Found By Query");
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500);
    res.json({ error: error.message });
    console.log(error);
  }
});

export default router;
