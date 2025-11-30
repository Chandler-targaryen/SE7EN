## frontend

cd frontend
npm install
npm install react react-dom react-router-dom
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install framer-motion
npm install @clerk/clerk-react
npm install dotenv
npm install react-icons
npm start


## backend
cd backend
python --version
python -m venv .venv
.venv\Scripts\activate
source venv/bin/activate
pip install svix
pip install uvicorn

uvicorn app.main:app --reload --port 8000