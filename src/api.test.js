// src/api.test.js

//imports, first for the supertest library and then greeting.js
const request = require("supertest");
const api = require("./api");


//to group tests together, relevant when the number of tests grows
describe("GET /greeting/:name endpoint", () => {
	it("should return a 200 OK status code", async () => { //use async and await to wait for request to finish
		const res = await request(api).get("/greeting/_");
		expect(res.status).toBe(200); //200 is the HTTP code for OK
	});
	it("should return the greeting in a object", async () => {
		const res = await request(api).get("/greeting/Diana");
		expect(res.body.greeting).toBe("Hello, Diana!");
	});
});