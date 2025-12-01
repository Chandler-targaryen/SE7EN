# SE7EN Home Services

SE7VEN home services provides a range of COVID home assistance services. Safe, contactless, high-trust home services including cleaning, supermarket delivery, electrical repairs, medication distribution, and sanitization are desperately needed in light of the COVID-19 epidemic. High data sharing, unrestricted communication, and physical verification are common components of traditional service-booking models, all of which raise exposure risk and go against privacy standards. This is where we come in, our app was designed with the following things on mind:
- Strong authentication, 
- minimum data retention,
- privacy-by-design

These features are guaranteed by the project's integration of a React frontend, Clerk identity platform, FastAPI backend, and SQLite database.

![Services page](frontend/public/image.png)


## Our Mission
The SE7EN Home Services app was created as a secure-by-design, privacy-preserving platform that allows users to: 
- Safely schedule necessary services


- Use as little personal information as possible when interacting with service providers


- Steer clear of needless interaction and exposure


- Get necessary services at a lower risk


## Get started
### Getting the backend running

#### Installing all the backend dependencies
```
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```


#### Starting the backend
`uvicorn app.main:app --reload --port 8000` this command starts the backend at port 8000.



### Getting the frontend running

#### Installing all the frontend dependencies
```
cd ../
cd frontend
npm install
npm install react react-dom react-router-dom
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install framer-motion
npm install @clerk/clerk-react
npm install dotenv
npm install react-icons
npm build
```

#### Starting the frontend
`npm start`



