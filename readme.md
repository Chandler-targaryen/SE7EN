## frontend

cd frontend
npm install
npm install react react-dom react-router-dom
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install framer-motion
npm install @clerk/clerk-react
npm install dotenv
npm start


## backend
cd backend
python --version
python -m venv venv
venv\Scripts\activate
source venv/bin/activate
pip install -r requirements.txt

uvicorn app.main:app --reload --port 8000