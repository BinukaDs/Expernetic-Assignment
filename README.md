# Expernetic Assignment


## Introduction

This project was completed as an assignment for the Expernetic Software Engineering Full‑Stack Internship assessment. It showcases a simple library management system with a .NET 9 backend (SQLite) and a React (TypeScript) frontend.

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/Expernetic-Assignment.git
    cd Expernetic-Assignment
    ```

2. **Set up the API (.NET 9) backend**
    ```bash
    cd api
    dotnet restore
    dotnet run
    ```
    The API will start on the configured port (`https://localhost:5210`).

3. **Set up the React (TypeScript) frontend**
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```
    The frontend will start on `http://localhost:5173` and connect to the API.


## Installation

Make sure you have [Node.js](https://nodejs.org/) installed. Then, install the required dependencies as shown above.

## Usage

After installation, you can start the development server and view the project in your browser. Modify the source code as needed to complete the assignment requirements.

## Project Structure

```
Expernetic-Assignment/
├── src/
│   └── ... (source files)
├── package.json
├── README.md
└── ...
```