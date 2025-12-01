from fastapi import APIRouter, Request, HTTPException
from svix.webhooks import Webhook
from app.database.db import User, SessionLocal
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter(prefix="")

####
# As the clerk weebhook needs a public domain this functionality might
# not work until you deploy the application on a domain add it in the clerk 
# weebhook endpoint.
####

CLERK_WEBHOOK_SECRET = os.getenv('CLERK_WEBHOOK_SECRET')
# CLERK_WEBHOOK_SECRET = "whsec_ywUc7G6WSowhkE4DFtelvatpkxwkTIG9"


@router.post("/webhooks/clerk")
async def clerk_webhook(request: Request):

    print("Webhook hit!")             # <-- LOG
    # body = await request.body()
    # print("RAW BODY:", body)          # <-- LOG
    print("HEADERS:", request.headers) 
    
    
    payload = await request.body()
    headers = request.headers

    try:
        wh = Webhook(CLERK_WEBHOOK_SECRET)
        event = wh.verify(payload, headers)
        print(f'printing event:\n{event}')
    except Exception as e:
        print("Signature verification failed:", e)
        raise HTTPException(status_code=400, detail=f"Invalid signature: {e}")

    event_type = event["type"]
    data = event["data"]

    db = SessionLocal()
    print(f'printing data\n {data}')

    if event_type == "user.created":
        user = User(
            id=data["id"],
            username=data["username"],
            email=data["email_addresses"][0]["email_address"],
            first_name=data.get("first_name"),
            last_name=data.get("last_name"),
            image_url=data.get("image_url")
        )
        db.add(user)
        db.commit()

    elif event_type == "user.updated":
        print(data["username"])
        user = db.query(User).filter(User.id == data["id"]).first()
        if user:
            user.email = data["email_addresses"][0]["email_address"]
            user.first_name = data.get("first_name")
            user.last_name = data.get("last_name")
            user.image_url = data.get("image_url")
            db.commit()

    return {"status": "ok"}
