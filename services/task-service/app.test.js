// Import Supertest (to make fake requests) and our App
const request = require('supertest');

const app = require('./app');

//Describe blocks let us group  our test together
describe('Task API Endpoints',()=>{
    //"it" explain what a particular test should do
    it('should hould return 200 and a list of tasks when calling GET /api/tasks',
        async () =>{
            // Arrange & Act: Use supertest to make a fake request to our app
            const response = await request(app).get('/api/tasks');

            //Assert : Check if the response matches what we expect
            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe("Task service is running.");
            expect(response.body.tasks.length).toBe(2);
        }
    );
});
