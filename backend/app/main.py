from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from .database.db import User, Bookings
from .database.db import Base, engine
from app.webhooks import router
from .clerk_auth import verify_clerk_token

Base.metadata.create_all(bind=engine)

from app.webhooks import router

app = FastAPI()

app.include_router(router)

origins = ["http://localhost:3000", "YOUR_PUBLIC_URL"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "API running"}


@app.get("/protected")
def protected_route(user=Depends(verify_clerk_token)):
    return {"message": "Protected content", "user": user}