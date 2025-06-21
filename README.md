

Frontend (React + Vite)
Admin Panel (React + Vite)
Backend (Node.js, Express — started with `npm run server` as you see in scripts(package.json folder))

Food Delivery Project
A full-stack food delivery application with separate user and admin frontends, and a Node.js backend server.


Project Structure
project-root/
│
├── backend/              # Node.js + Express backend
│   └── (server files)
│
├── frontend/             # User-facing frontend (React + Vite)
│   └── (React Vite app)
│
├── admin/                # Admin dashboard (React + Vite)
│   └── (React Vite app)
│
└── README.md             # You're here


Follow these steps to run the project locally.
1. Clone the Repository
git clone url===>https://github.com/chhote12/fooddelivery3.git
cd fooddelivery3

2. Setup Backend (Node.js + Express)
cd backend
npm install
npm run server
Starts the server on `http://localhost:4000`


3. Setup Frontend (User Side — React + Vite)
cd ../frontend
npm install
npm run dev


4. Setup Admin Panel (React + Vite)
cd ../admin
npm install
npm run dev


Environment Variables
Make sure to set up the required `.env` files (only in `backend/`) with variables like:
PORT=5000
MONGO_URL=mongodb://localhost:27017/db_name
JWT_TOKEN_SECRET=your_jwt_secret
STRIP_SECRET=your_stripe_secret



Query:
For any issues or questions, please contact me at: singhchhote695@gmail.com
