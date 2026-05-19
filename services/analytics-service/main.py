#Import FastAPI
from fastapi import FastAPI

#Create our application 
app=FastAPI()

#Create an API 
# When someone visits GET /api/analytics, run this function
@app.get("/api/analytics")
def get_analytics():
    #FastAPI automatically converts Python dictionaries into JSON!
    return{
        "message": "Analytics service is running!",
        "stats": {
            "totalTasksCompleted": 150,
            "activeUsers": 42
        }
    }