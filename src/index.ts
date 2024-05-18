import app from "./app";
import mongoose from "mongoose";

const port = process.env.PORT || 5000;

async function connectToMongoDB(connectionString: string) {
  await mongoose.connect(connectionString);
  console.log(`Connected to MongoDB: ${process.env.MONGO_URI}`);
}

app.listen(port, async () => {
  try {
    connectToMongoDB(process.env.MONGO_URI || "");
    console.log(`Listening: http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});

/* eslint-disable no-console */
/* eslint-enable no-console */
