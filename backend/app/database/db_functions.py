from sqlalchemy.orm import Session
from db import SessionLocal, User
from main import router


@router.post("/signup")
def userSignup(user: User, db: Session = SessionLocal):
    pass

