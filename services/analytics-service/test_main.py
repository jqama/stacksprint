# Import the TestClient to make fake requests
from fastapi.testclient import TestClient
# Import the app we just built
from main import app
# Create our test client
client = TestClient(app)
# The test function. Pytest will run any function that starts with 'test_'
def test_get_analytics():
    # Arrange & Act: Make a fake request
    response = client.get("/api/analytics")
    
    # Assert: Check the status code and the response data
    assert response.status_code == 200
    
    data = response.json()
    assert data["message"] == "Analytics service is running!"
    assert data["stats"]["activeUsers"] == 42