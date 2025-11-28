from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from .clerk_auth import verify_clerk_token

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/protected")
def protected_route(user=Depends(verify_clerk_token)):
    return {"message": "Protected content", "user": user}