from sqlalchemy import create_engine, Column, String, text
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.pool import NullPool
from pydantic import EmailStr


engine = create_engine("sqlite:///lala_land.db", connect_args={"check_same_thread": False}, poolclass=NullPool)
Base = declarative_base()

with engine.connect() as conn:
    conn.execute(text("PRAGMA journal_mode=WAL;"))


SessionLocal = sessionmaker(bind=engine, autoflush=False)

class User(Base):
    __tablename__ = "user"
    id = Column(String, primary_key=True)
    username = Column(String)
    email = EmailStr
    password = Column(String)
    current_bookings = Column(String)

class Bookings(Base):
    __tablename__ = "bookings"
    booking_id = Column(String, primary_key=True)
    username = Column(String)