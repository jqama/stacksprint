# Use a lightweight version of Python 3.11
FROM python:3.11-slim

WORKDIR /app

# Copy requirements and install them
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy our application code
COPY . .

# Expose port 8000 and run Uvicorn on all network interfaces (0.0.0.0)
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
