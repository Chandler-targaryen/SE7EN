from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import uuid4
from app.webhooks import router
from app.database.db import SessionLocal, User, Bookings
from schemas import BookingCreate, BookingCancel

# router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ---- CREATE BOOKING ----
@router.post("/booking/create")
def create_booking(user_id: str, booking: BookingCreate, db: Session = Depends(get_db)):
    print(user_id)
    print(User.id)
    # ensuring user exists
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(404, "User does not exist")

    booking_entry = Bookings(
        booking_id=str(uuid4()),
        user_id=user_id,
        service_name=booking.service_name,
        date=booking.date,
        time=booking.time,
        status="active"
    )
    
    db.add(booking_entry)
    db.commit()
    db.refresh(booking_entry)

    return {"message": "Booking created", "booking": booking_entry}


# ---- CANCEL BOOKING ----
@router.post("/booking/cancel")
def cancel_booking(cancel_data: BookingCancel, db: Session = Depends(get_db)):

    booking = db.query(Bookings).filter(Bookings.booking_id == cancel_data.booking_id).first()
    if not booking:
        raise HTTPException(404, "Booking not found")

    booking.status = "cancelled"
    db.commit()

    return {"message": "Booking cancelled"}


@router.get("/booking/user/{user_id}")
def get_user_bookings(user_id: str, db: Session = Depends(get_db)):
    return db.query(Bookings).filter(Bookings.user_id == user_id).all()
