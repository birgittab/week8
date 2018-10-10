/*
const greeting = required('./src/greeting');
console.log(greeting('Totoro'));
*/


const app = require("./src/api");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
});