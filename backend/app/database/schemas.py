from pydantic import BaseModel

class BookingCreate(BaseModel):
    service_name: str
    date: str
    time: str

class BookingCancel(BaseModel):
    booking_id: str
