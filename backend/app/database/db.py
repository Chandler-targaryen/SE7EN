from sqlalchemy import create_engine, Column, String, text, DateTime, Time
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.pool import NullPool
from pydantic import EmailStr


engine = create_engine("sqlite:///SE7EN.db", connect_args={"check_same_thread": False}, poolclass=NullPool)
Base = declarative_base()

with engine.connect() as conn:
    conn.execute(text("PRAGMA journal_mode=WAL;"))


SessionLocal = sessionmaker(bind=engine, autoflush=False)

class User(Base):
    __tablename__ = "user"
    id = Column(String, primary_key=True)
    username = Column(String)
    email = Column(String)
    password = Column(String)
    current_bookings = Column(String)
    first_name = Column(String)
    last_name = Column(String)
    image_url = Column(String)

class Bookings(Base):
    __tablename__ = "bookings"
    booking_id = Column(String, primary_key=True)
    username = Column(String)
    user_id=Column(String)
    service_name=Column(String)
    date=Column(String)
    time=Column(String)
    status=Column(String)