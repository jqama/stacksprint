//Import the app we just created in app.js file
const app = require("./app");

const PORT = 4000;

//Tell the app to start listening for requests on port 4000
app.listen(PORT, () => {
    console.log('Task service is running on http://localhost:$(PORT)');
});
