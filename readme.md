# Historical Data Strategy Tester

This project is designed to test trading strategies using historical data. It allows users to define and implement various trading strategies, backtest them against historical data, and analyze the results. The project uses a Python backend with Flask and a React frontend with Redux and Parcel. The database is powered by TimescaleDB running in a Docker container.

## Project Structure

- `backend/`: Directory containing the Flask backend.
- `frontend/`: Directory containing the React/Redux frontend.
- `.gitignore`: File specifying which files and directories to ignore in the repository.
- `README.md`: This file.


# Setup

```bash
docker run -d --name timescaledb -p 127.0.0.1:5432:5432 \
-e POSTGRES_PASSWORD=password timescale/timescaledb-ha:pg17

psql -d "postgres://postgres:password@localhost/postgres"

Note: The above commands worked for me to set up and connect to TimescaleDB.