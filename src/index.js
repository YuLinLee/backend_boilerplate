import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import index from "./routes/index";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);

app.listen(process.env.PORT, () =>
	console.log(`Running on localhost:${process.env.PORT}`)
);
