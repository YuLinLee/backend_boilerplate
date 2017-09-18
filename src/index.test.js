import request from "supertest";
import app from "./index";

test(`Check server is running on localhost:${process.env.PORT}`, () => {
	request(app)
		.get("/")
		.expect(200)
		.end();
});
