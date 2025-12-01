from fastapi import FastAPI, Depends, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .database.db import Base, engine
from app.webhooks import router
# from .clerk_auth import verify_clerk_token

app = FastAPI()

app.include_router(router)
# router = APIRouter(prefix="")

origins = ["http://localhost:3000", 'YOUR_PUBLIC_URL']


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def main():
    Base.metadata.create_all(bind=engine)

# @app.get("/protected")
# def protected_route(user=Depends(verify_clerk_token)):
#     return {"message": "Protected content", "user": user}